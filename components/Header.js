import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#0f172a] text-white border-b border-gray-700">
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-6 py-4">

        {/* ロゴ */}
        <Link
          href="/"
          className="text-lg md:text-xl font-semibold tracking-widest"
        >
          株式会社サンプル建設
        </Link>

        {/* ナビ */}
        <nav className="flex items-center gap-6 mt-4 md:mt-0 text-sm md:text-xs">
          <Link
            href="/"
            className="hover:text-brand-accent transition-colors duration-300"
          >
            ホーム
          </Link>

          <Link
            href="/about"
            className="hover:text-brand-accent transition-colors duration-300"
          >
            会社概要
          </Link>

          <Link
            href="/contact"
            className="hover:text-brand-accent transition-colors duration-300"
          >
            お問い合わせ
          </Link>
        </nav>

      </div>
    </header>
  );
}