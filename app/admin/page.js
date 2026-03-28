"use client";

import { useEffect, useMemo, useState } from "react";
import { defaultTenant } from "../../data/tenants";

const STORAGE_KEY = "achievementPhotos";
const SESSION_KEY = "adminAuthenticated";

function normalizePhotos(list) {
  if (!Array.isArray(list)) {
    return [];
  }

  return list
    .filter((item) => item && typeof item.src === "string" && item.src.trim().length > 0)
    .map((item, index) => ({
      id: item.id || `photo-${Date.now()}-${index}`,
      src: item.src,
      alt: item.alt || `実績写真 ${index + 1}`
    }));
}

function readStoredPhotos(fallbackPhotos) {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return fallbackPhotos;
    }

    const parsed = normalizePhotos(JSON.parse(raw));
    return parsed.length > 0 ? parsed : fallbackPhotos;
  } catch {
    return fallbackPhotos;
  }
}

export default function AdminPage() {
  const tenantDefaults = useMemo(
    () => normalizePhotos(defaultTenant?.achievementsSection?.galleryPhotos || []),
    []
  );

  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [photos, setPhotos] = useState(tenantDefaults);
  const [photoUrl, setPhotoUrl] = useState("");
  const [photoAlt, setPhotoAlt] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const isAuthenticated = window.sessionStorage.getItem(SESSION_KEY) === "true";
    setAuthenticated(isAuthenticated);

    const current = readStoredPhotos(tenantDefaults);
    setPhotos(current);

    if (!window.localStorage.getItem(STORAGE_KEY) && tenantDefaults.length > 0) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tenantDefaults));
    }
  }, [tenantDefaults]);

  const savePhotos = (nextPhotos) => {
    const normalized = normalizePhotos(nextPhotos);
    setPhotos(normalized);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      setErrorMessage(data.message || "ログインに失敗しました。");
      return;
    }

    window.sessionStorage.setItem(SESSION_KEY, "true");
    setAuthenticated(true);
    setPassword("");
  };

  const handleAddByUrl = (event) => {
    event.preventDefault();
    const trimmed = photoUrl.trim();

    if (!trimmed) {
      setStatusMessage("URLを入力してください。");
      return;
    }

    const next = [
      ...photos,
      {
        id: `photo-${Date.now()}`,
        src: trimmed,
        alt: photoAlt.trim() || `実績写真 ${photos.length + 1}`
      }
    ];

    savePhotos(next);
    setPhotoUrl("");
    setPhotoAlt("");
    setStatusMessage("写真を追加しました。");
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== "string") {
        return;
      }

      const next = [
        ...photos,
        {
          id: `photo-${Date.now()}`,
          src: reader.result,
          alt: photoAlt.trim() || `実績写真 ${photos.length + 1}`
        }
      ];

      savePhotos(next);
      setPhotoAlt("");
      setStatusMessage("写真ファイルを追加しました。");
    };

    reader.readAsDataURL(file);
    event.target.value = "";
  };

  const handleDelete = (id) => {
    const next = photos.filter((photo) => photo.id !== id);
    savePhotos(next);
    setStatusMessage("写真を削除しました。");
  };

  const handleReset = () => {
    savePhotos(tenantDefaults);
    setStatusMessage("初期写真にリセットしました。");
  };

  const handleLogout = () => {
    window.sessionStorage.removeItem(SESSION_KEY);
    setAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-[var(--color-surface)] px-6 py-20">
        <div className="max-w-md mx-auto rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)]">
          <h1 className="text-2xl font-bold text-[var(--color-primary)] mb-2">管理者ログイン</h1>
          <p className="text-sm text-[var(--color-text)]/75 mb-6">実績紹介の写真管理画面です。</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <label className="block">
              <span className="text-sm font-semibold text-[var(--color-primary)]">ユーザー名</span>
              <input
                className="mt-1 w-full rounded-lg border border-[var(--color-border)] px-3 py-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-[var(--color-primary)]">パスワード</span>
              <input
                type="password"
                className="mt-1 w-full rounded-lg border border-[var(--color-border)] px-3 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </label>

            {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}

            <button
              type="submit"
              className="w-full rounded-full bg-[var(--color-primary)] py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)]"
            >
              ログイン
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-surface)] px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8 shadow-[var(--shadow-card)] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[var(--color-primary)]">実績紹介 写真管理</h1>
            <p className="text-sm text-[var(--color-text)]/75 mt-2">ホームの実績紹介ギャラリーに表示する写真を追加・削除できます。</p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-5 py-2 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-surface)]"
          >
            ログアウト
          </button>
        </header>

        <section className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8 shadow-[var(--shadow-card)] space-y-4">
          <h2 className="text-xl font-bold text-[var(--color-primary)]">写真を追加</h2>

          <form onSubmit={handleAddByUrl} className="grid gap-4 md:grid-cols-[1fr_1fr_auto] items-end">
            <label className="block">
              <span className="text-sm font-semibold text-[var(--color-primary)]">写真URL</span>
              <input
                className="mt-1 w-full rounded-lg border border-[var(--color-border)] px-3 py-2"
                placeholder="https://example.com/photo.jpg"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-[var(--color-primary)]">代替テキスト</span>
              <input
                className="mt-1 w-full rounded-lg border border-[var(--color-border)] px-3 py-2"
                placeholder="例: 施工現場の全景"
                value={photoAlt}
                onChange={(e) => setPhotoAlt(e.target.value)}
              />
            </label>

            <button
              type="submit"
              className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)]"
            >
              URL追加
            </button>
          </form>

          <div className="flex flex-wrap items-center gap-4">
            <label className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-surface)]">
              ファイル追加
              <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </label>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-surface)]"
            >
              初期状態に戻す
            </button>
          </div>

          {statusMessage ? <p className="text-sm text-[var(--color-primary)]/80">{statusMessage}</p> : null}
        </section>

        <section className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8 shadow-[var(--shadow-card)]">
          <h2 className="text-xl font-bold text-[var(--color-primary)] mb-4">登録済み写真 ({photos.length})</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <article key={photo.id} className="rounded-xl border border-[var(--color-border)] overflow-hidden bg-[var(--color-surface)]">
                <div className="aspect-[4/3] bg-white">
                  <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
                </div>
                <div className="p-3">
                  <p className="text-sm text-[var(--color-text)]/85 truncate" title={photo.alt}>{photo.alt}</p>
                  <button
                    type="button"
                    onClick={() => handleDelete(photo.id)}
                    className="mt-3 inline-flex rounded-full border border-red-300 px-3 py-1 text-xs font-semibold text-red-600 hover:bg-red-50"
                  >
                    削除
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
