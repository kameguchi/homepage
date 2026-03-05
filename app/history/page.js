import Image from "next/image";
import PageHero from "../../components/PageHero";
import { getCurrentTenant } from "../../lib/tenant";

export const metadata = {
  title: "沿革 | 株式会社TOM",
  description: "株式会社TOMの沿革ページです。"
};

export default async function About() {
  const tenant = await getCurrentTenant();

  return (
    <div>
      {/* 背景紹介レイアウト */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/company5.jpg"
          alt="会社背景"
          fill
          className="object-cover -z-10"
          loading="eager"
          priority
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* テキスト */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{textShadow: '0 4px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'}}>沿革</h1>
          <p className="text-lg md:text-xl leading-relaxed mb-4" style={{textShadow: '0 2px 6px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)'}}>
            弊社は2025年8月の設立以来、日本のエネルギー転換の最前線に立ち、再生可能エネルギーの普及と発展に貢献することを使命としております。設立当初から、単なる設備の提供にとどまらず、お客様の長期的なパートナーとして、持続可能なエネルギーソリューションの実現をサポートしてまいります。
          </p>
          <p className="text-lg md:text-xl leading-relaxed" style={{textShadow: '0 2px 6px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)'}}>
            今後も技術革新と品質向上に努め、地域社会とともに歩む企業として成長を続けてまいります。環境負荷の軽減と経済性の両立を実現し、次世代に向けたより良い社会の構築に貢献いたします。
          </p>
        </div>
      </section>

      <section className="py-[var(--section-padding-y)] px-[var(--section-padding-x)] bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto relative">
          {/* 中央の縦線 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-[var(--color-primary)]"></div>

          {/* マイルストーン */}
          <div className="space-y-12 relative">
            {tenant.history && tenant.history.map((item, i) => (
              <div key={i} className={`flex gap-8 ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                {/* テキスト部分 */}
                <div className="w-1/2">
                  <div className="bg-[var(--color-elevated)] rounded-xl p-6 shadow border border-[var(--color-border)]">
                    <p className="text-sm font-semibold text-[var(--color-primary)] mb-2">{item.year}</p>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* 中央のドット */}
                <div className="w-0 flex justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--color-primary)] border-4 border-[var(--color-surface)] shadow-lg"></div>
                </div>

                {/* スペーサー */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
