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
        <nav className="flex gap-8 items-center text-sm tracking-wider">
          <Link
            href="/"
            className="px-6 hover:text-gray-600 transition-colors duration-300"
          >
            ホーム
          </Link>

          <span className="h-4 w-px bg-gray-600"></span>

          <Link
            href="/about"
            className="px-6 hover:text-gray-600 transition-colors duration-300"
          >
            会社概要
          </Link>

          <span className="h-4 w-px bg-gray-600"></span>

          <Link
            href="/contact"
            className="px-6 hover:text-gray-600 transition-colors duration-300"
          >
            お問い合わせ
          </Link>
        </nav>

      </div>
    </header>
  );
}