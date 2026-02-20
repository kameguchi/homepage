export default function Footer() {
  return (
    <footer className="bg-brand-primary text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wider">
            株式会社サンプル建設
          </h3>
          <p className="text-sm text-brand-sub">
            地域とともに歩む、確かな技術力。
          </p>
        </div>

        <div>
          <h4 className="text-white mb-4 text-sm tracking-widest">
            MENU
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-brand-accent transition">ホーム</a></li>
            <li><a href="/about" className="hover:text-brand-accent transition">会社概要</a></li>
            <li><a href="/contact" className="hover:text-brand-accent transition">お問い合わせ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-4 text-sm tracking-widest">
            CONTACT
          </h4>
          <p className="text-sm">〒000-0000</p>
          <p className="text-sm">東京都〇〇区〇〇1-2-3</p>
          <p className="text-sm mt-2">TEL: 00-0000-0000</p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center text-xs py-6 text-brand-sub">
        © 2026 SAMPLE CONSTRUCTION CO.
      </div>
    </footer>
  );
}