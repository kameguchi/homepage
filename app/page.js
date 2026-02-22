import Image from "next/image";
import Link from "next/link";
import { getCurrentTenant } from "../lib/tenant";

export default async function Home() {
  const tenant = await getCurrentTenant();

  return (
    <div className="font-sans text-[var(--color-text)]">

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image
          src="/company.jpg"
          alt="会社外観"
          fill
          className="object-cover"
        />
        {/* 黒オーバーレイ */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* テキスト */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {tenant.siteName}
          </h1>
          <p className="text-lg md:text-xl mb-6">
            {tenant.catchcopy}
          </p>
          <Link href="/contact" className="inline-block bg-[var(--color-accent)] text-black hover:opacity-90 px-6 py-3 rounded-lg transition">
            お問い合わせ
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-[var(--color-surface)] text-center">
        <h2 className="text-3xl font-bold mb-12">事業内容</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition border border-black/5">
            <h3 className="text-xl font-semibold mb-4">新築工事</h3>
            <p>安全・高品質な施工を提供します。</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition border border-black/5">
            <h3 className="text-xl font-semibold mb-4">リフォーム</h3>
            <p>暮らしを快適にする改修工事。</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition border border-black/5">
            <h3 className="text-xl font-semibold mb-4">公共工事</h3>
            <p>地域社会に貢献するインフラ整備。</p>
          </div>
        </div>
      </section>

    </div>
  );
}
