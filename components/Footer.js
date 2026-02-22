import Link from "next/link";

export default function Footer({ tenant }) {
  return (
    <footer className="bg-brand-primary text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-gray-500 md:text-2xl font-semibold mb-4 tracking-wider">
            {tenant?.siteName || "株式会社サンプル建設"}
          </h3>
          <p className="text-sm text-gray-400">
            {tenant?.catchcopy || "地域とともに歩む、確かな技術力。"}
          </p>
        </div>

        <div>
          <h4 className="text-gray-500 mb-4 text-sm tracking-widest">
            MENU
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[var(--color-accent)] transition">ホーム</Link></li>
            <li><Link href="/about" className="hover:text-[var(--color-accent)] transition">会社概要</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-accent)] transition">お問い合わせ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-500 mb-4 text-sm tracking-widest">
            CONTACT
          </h4>
          <p className="text-sm">{tenant?.address || "東京都〇〇区〇〇1-2-3"}</p>
          <p className="text-sm mt-2">TEL: {tenant?.phone || "00-0000-0000"}</p>
          <p className="text-sm">MAIL: {tenant?.email || "info@example.co.jp"}</p>
        </div>

      </div>

      <div className="border-t border-white/20 text-center text-xs py-6 text-gray-400">
        © 2026 SAMPLE CONSTRUCTION CO.
      </div>
    </footer>
  );
}