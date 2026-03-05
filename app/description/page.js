import Image from "next/image";
import PageHero from "../../components/PageHero";
import { getCurrentTenant } from "../../lib/tenant";

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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">主な事業内容</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {(tenant.businessItems || []).map((item, idx) => (
              <div key={idx} className="relative bg-[var(--color-elevated)] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[var(--color-border)]">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}