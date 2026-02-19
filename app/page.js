import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image
          src="/company.jpg"
          alt="会社外観"
          fill
          className="object-cover -z-10"
        />
        {/* 黒オーバーレイ */}
        <div className="absolute inset-0 bg-black/50 -z-10"></div>

        <div className="relative z-10 text-center px-6 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            未来をつくる建設会社
          </h1>
          <p className="text-lg md:text-xl mb-6">
            地域とともに歩む、確かな技術力
          </p>
          <button className="bg-blue-900 hover:bg-blue-800 px-6 py-3 rounded-lg transition">
            お問い合わせ
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">事業内容</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">新築工事</h3>
            <p>安全・高品質な施工を提供します。</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">リフォーム</h3>
            <p>暮らしを快適にする改修工事。</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">公共工事</h3>
            <p>地域社会に貢献するインフラ整備。</p>
          </div>
        </div>
      </section>

    </div>
  );
}
