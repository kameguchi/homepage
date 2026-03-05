import Image from "next/image";
import PageHero from "../../components/PageHero";
import { getCurrentTenant } from "../../lib/tenant";

// \u30a2\u30a4\u30b3\u30f3\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8
const IconComponent = ({ icon }) => {
  const icons = {
    sun: (
      <svg className="w-12 h-12 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5"/>
        <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6m-17.78 7.78l4.24-4.24m5.08-5.08l4.24-4.24"/>
      </svg>
    ),
    battery: (
      <svg className="w-12 h-12 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="6" width="16" height="12" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/>
        <rect x="18" y="8" width="2" height="8" rx="1"/>
        <rect x="4" y="8" width="3" height="8" fill="currentColor"/>
      </svg>
    ),
    building: (
      <svg className="w-12 h-12 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="5" height="5" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="10" y="3" width="5" height="5" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="17" y="3" width="4" height="5" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="3" y="10" width="5" height="5" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="10" y="10" width="5" height="5" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="17" y="10" width="4" height="5" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="3" y="17" width="18" height="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    home: (
      <svg className="w-12 h-12 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
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

      {/* 事業説明テキスト */}
      <section className="py-[var(--section-padding-y)] px-[var(--section-padding-x)] bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-semibold prose-headings:text-[var(--color-primary)] prose-a:text-[var(--color-accent)] whitespace-pre-line">
          {tenant.description}
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
    </div>
  );
}