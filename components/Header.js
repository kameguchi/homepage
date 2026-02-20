import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#0f172a] text-white border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        
        {/* ロゴ */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-widest"
        >
          株式会社サンプル建設
        </Link>

        {/* ナビ */}
        <nav className="flex items-center text-[10px]">
          <Link
            href="/"
            className="px-16 hover:text-brand-accent transition-colors duration-300"
          >
            ホーム
          </Link>

          <span className="h-3 w-px bg-gray-500 opacity-50"></span>

          <Link
            href="/about"
            className="px-16 hover:text-brand-accent transition-colors duration-300"
          >
            会社概要
          </Link>

          <span className="h-3 w-px bg-gray-500 opacity-50"></span>

          <Link
            href="/contact"
            className="px-16 hover:text-brand-accent transition-colors duration-300"
          >
            お問い合わせ
          </Link>
        </nav>

      </div>
    </header>
  );
}