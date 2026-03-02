"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header({ tenant }) {
  return (
    <header className="bg-[var(--color-primary)] text-white border-b border-white/20">
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-[var(--section-padding-x)] py-[var(--header-padding-y)] gap-[var(--nav-gap)]">

        {/* ロゴ */}
        <Link
          href="/"
          className="text-lg md:text-xl font-semibold tracking-widest"
        >
          {tenant?.siteName || "株式会社サンプル建設"}
        </Link>

        {/* ナビ */}
        <nav className="flex items-center gap-6 mt-4 md:mt-0 text-sm md:text-xs">
          <Link
            href="/"
            className="hover:text-[var(--color-accent)] transition-colors duration-300"
          >
            ホーム
          </Link>

          <Link
            href="/about"
            className="hover:text-[var(--color-accent)] transition-colors duration-300"
          >
            会社概要
          </Link>

          <Link
            href="/contact"
            className="hover:text-[var(--color-accent)] transition-colors duration-300"
          >
            お問い合わせ
          </Link>
        </nav>

        <ThemeSwitcher />

      </div>
    </header>
  );
}