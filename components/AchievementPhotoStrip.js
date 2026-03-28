"use client";

import { useEffect, useMemo, useState } from "react";

function sanitizePhotos(list) {
  if (!Array.isArray(list)) {
    return [];
  }

  return list
    .filter((item) => item && typeof item.src === "string" && item.src.trim().length > 0)
    .map((item, index) => ({
      id: item.id || `photo-${index}-${item.src.slice(0, 12)}`,
      src: item.src,
      alt: item.alt || `実績写真 ${index + 1}`
    }));
}

export default function AchievementPhotoStrip({
  storageKey = "achievementPhotos",
  title = "実績フォト",
  lead = "現場写真を横並びでご覧いただけます。",
  initialPhotos = []
}) {
  const fallbackPhotos = useMemo(() => sanitizePhotos(initialPhotos), [initialPhotos]);
  const [photos, setPhotos] = useState(fallbackPhotos);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const stored = sanitizePhotos(JSON.parse(raw));
        if (stored.length > 0) {
          setPhotos(stored);
          return;
        }
      }

      if (fallbackPhotos.length > 0) {
        window.localStorage.setItem(storageKey, JSON.stringify(fallbackPhotos));
        setPhotos(fallbackPhotos);
      }
    } catch {
      setPhotos(fallbackPhotos);
    }
  }, [fallbackPhotos, storageKey]);

  useEffect(() => {
    const onStorage = (event) => {
      if (event.key !== storageKey) {
        return;
      }

      try {
        const list = event.newValue ? sanitizePhotos(JSON.parse(event.newValue)) : [];
        setPhotos(list.length > 0 ? list : fallbackPhotos);
      } catch {
        setPhotos(fallbackPhotos);
      }
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [fallbackPhotos, storageKey]);

  if (!photos.length) {
    return null;
  }

  return (
    <section className="mt-12">
      <div className="flex items-end justify-between gap-4 mb-5">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">{title}</h3>
          <p className="text-sm md:text-base text-[var(--color-text)]/80 mt-2">{lead}</p>
        </div>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="flex gap-4 md:gap-5 min-w-max">
          {photos.map((photo) => (
            <article
              key={photo.id}
              className="group w-[260px] md:w-[320px] lg:w-[360px] flex-shrink-0 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white/72 shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[var(--color-surface)]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
