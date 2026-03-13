import Image from "next/image";
import PageHero from "../../components/PageHero";
import { getCurrentTenant } from "../../lib/tenant";

// \u30a2\u30a4\u30b3\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8
const IconComponent = ({ icon }) => {
  const icons = {
    sun: (
      <svg className="w-12 h-12 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6m-17.78 7.78l4.24-4.24m5.08-5.08l4.24-4.24" />
      </svg>
    ),
    battery: (
      <svg className="w-12 h-12 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="6" width="16" height="12" rx="2" strokeWidth="2" stroke="currentColor" fill="none" />
        <rect x="18" y="8" width="2" height="8" rx="1" />
        <rect x="4" y="8" width="3" height="8" fill="currentColor" />
      </svg>
    ),
    building: (
      <svg className="w-12 h-12 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="5" height="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="10" y="3" width="5" height="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="17" y="3" width="4" height="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="3" y="10" width="5" height="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="10" y="10" width="5" height="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="17" y="10" width="4" height="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="3" y="17" width="18" height="4" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    home: (
      <svg className="w-12 h-12 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
    "solar-panel": (
      <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24">
        {/* パネル本体 */}
        <rect x="3" y="4" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        {/* 格子 */}
        <path d="M4 9h16M9 4v10M15 4v10" stroke="currentColor" strokeWidth="1" />
        {/* 支柱 */}
        <path d="M12 14v6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M8 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  };

  return icons[icon] || icons.sun;
};

export const metadata = {
  title: "事業内容 | 株式会社TOM",
  description: "弊社の事業内容をご紹介します。"
};

export default async function Description() {
  const tenant = await getCurrentTenant();

  return (
    <div>
      <PageHero
        title="事業内容"
        lead="私たちが取り組む事業をご紹介します。"
      />

      {/* イメージ付きイントロ */}
      <section className="px-[var(--section-padding-x)] py-[var(--section-padding-y)] bg-[var(--color-surface)]">
        <div className="relative max-w-5xl mx-auto aspect-[16/7] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[var(--color-border)]">
          <Image
            src="/company6.jpg"
            alt="事業イメージ"
            fill
            className="object-cover object-center scale-100 hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1280px) 92vw, 1152px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        </div>
      </section>

      {/* 事業内容カード */}
      <section className="py-[var(--section-padding-y)] px-[var(--section-padding-x)] bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">主な事業内容</h2>
          <div className="gap-20 flex flex-col">
            {(tenant.businessItems || []).slice(0, 3).map((item, idx) => (
              <div key={idx} className={`flex items-center gap-8 ${idx % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                {/* アイコンエリア */}
                <div className="hidden md:flex justify-center items-center flex-shrink-0">
                  <div className="bg-[var(--color-elevated)] rounded-xl py-24 px-20  border-[var(--color-border)] shadow-lg border -mx-2 relative z-10">
                    <IconComponent icon={item.icon} />
                  </div>
                </div>

                {/* カード */}
                <div className="w-full md:flex-1">
                  <div className="relative bg-[var(--color-elevated)] rounded-xl p-24 shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-border)]">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 強み・特徴 */}
      <section className="py-[var(--section-padding-y)] px-[var(--section-padding-x)] bg-[var(--color-surface)]">
        <h2 className="text-2xl font-bold mb-12 text-center">強み・特徴</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-[var(--color-primary)] p-8 rounded-xl shadow border border-[var(--color-border)]">
            <h3 className="text-[var(--color-elevated)] text-xl font-semibold mb-4">一貫体制</h3>
            <p className="text-[var(--color-elevated)]">設計～施工～保守までをワンストップでサービスを提供</p>
            <ul className="list-disc list-inside text-sm text-[var(--color-elevated)] mt-2">
              <li>プロジェクト管理の効率化</li>
              <li>品質の統一とコスト最適化</li>
              <li>迅速な問題解決とサポート</li>
            </ul>
          </div>

          <div className="bg-[var(--color-primary)] p-8 rounded-xl shadow border border-[var(--color-border)]">
            <h3 className="text-[var(--color-elevated)] text-xl font-semibold mb-4">豊富な実績</h3>
            <p className="text-[var(--color-elevated)]">発電所・蓄電池の施行多数の経験値</p>
            <ul className="list-disc list-inside text-sm text-[var(--color-elevated)] mt-2">
              <li>累計施工容量50MW以上</li>
              <li>多様な地域・条件での実績</li>
              <li>高い顧客満足度の維持</li>
            </ul>
          </div>

          <div className="bg-[var(--color-primary)] p-8 rounded-xl shadow border border-[var(--color-border)]">
            <h3 className="text-[var(--color-elevated)] text-xl font-semibold mb-4">専門資格</h3>
            <p className="text-[var(--color-elevated)]">電気工事士核保有による確実な施工</p>
            <ul className="list-disc list-inside text-sm text-[var(--color-elevated)] mt-2">
              <li>有資格者による安全な作業</li>
              <li>法令順守の徹底</li>
              <li>技術力の継続的向上</li>
            </ul>
          </div>

          <div className="bg-[var(--color-primary)] p-8 rounded-xl shadow border border-[var(--color-border)]">
            <h3 className="text-[var(--color-elevated)] text-xl font-semibold mb-4">スピード対応</h3>
            <p className="text-[var(--color-elevated)]">小規模～大規模案件まで柔軟対応</p>
            <ul className="list-disc list-inside text-sm text-[var(--color-elevated)] mt-2">
              <li>迅速な見積もりと提案</li>
              <li>効率的な工程管理</li>
              <li>お客様のスケジュールに合わせた対応</li>
            </ul>
          </div>
        </div>
        <div className="py-20 max-w-6xl mx-auto">
          <p className="text-[var(--color-primary)] font-semibold">弊社の最大の強みは、太陽光発電・蓄電池事業における総合的な対応力です。</p>
          <p className="text-[var(--color-primary)] font-semibold">設計段階から保守運用まで一貫してサポートすることで、お客様にとって最適なソリューションを提供いたします。</p>
          <p className="text-[var(--color-primary)] font-semibold">また、豊富な実績に裏打ちされた技術力と、有資格者による確実な施工体制により、高品質なサービスをお約束いたします。</p>
        </div>

      </section>
    </div>
  );
}