import Image from "next/image";
import PageHero from "../../components/PageHero";
import { getCurrentTenant } from "../../lib/tenant";

export const metadata = {
  title: "会社概要 | 株式会社TOM",
  description: "株式会社TOMの会社概要ページです。"
};

export default async function About() {
  const tenant = await getCurrentTenant();

  return (
    <div>
      <PageHero title="会社概要" lead="地域社会に寄り添い、確かな品質で未来を築きます。" />

      <section className="px-[var(--section-padding-x)] py-[var(--section-padding-y)] bg-[var(--color-surface)]">
        <div className="relative max-w-5xl mx-auto aspect-[16/7] overflow-hidden border border-[var(--color-border)]">
          <Image
            src="/company2.jpg"
            alt="会社外観"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 92vw, 1152px"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </section>

      <section className="py-[var(--section-padding-y)] px-[var(--section-padding-x)] bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto bg-[var(--color-elevated)] rounded-xl shadow border border-[var(--color-border)] overflow-hidden">
          <table className="w-full border-collapse text-sm md:text-base">
            <tbody>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left px-6 py-4 bg-[var(--color-surface)] w-40">会社名</th>
                <td className="px-6 py-4">{tenant.siteName}</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left px-6 py-4 bg-[var(--color-surface)]">所在地</th>
                <td className="px-6 py-4">{tenant.address}</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left px-6 py-4 bg-[var(--color-surface)]">設立</th>
                <td className="px-6 py-4">{tenant.since}</td>
              </tr>
              <tr>
                <th className="text-left px-6 py-4 bg-[var(--color-surface)]">
                  資本金
                </th>
                <td className="px-6 py-4">1,000万円</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left px-6 py-4 bg-[var(--color-surface)]">
                  代表取締役
                </th>
                <td className="px-6 py-4">{tenant.nameCeo}</td>
              </tr>
              <tr>
                <th className="text-left px-6 py-4 bg-[var(--color-surface)]">
                  事業内容
                </th>
                <td className="px-6 py-4">
                  <ul className="list-disc list-inside space-y-1">
                    <li>{tenant.workDetails1}</li>
                    <li>{tenant.workDetails2}</li>
                    <li>{tenant.workDetails3}</li>
                    <li>{tenant.workDetails4}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="mt-8 max-w-5xl mx-auto md:flex gap-6 items-start">
        <div className="md:w-1/4">
          <Image src="/company4.jpg" alt="" width={120} height={120} />
        </div>
        <div className="md:w-3/4 prose whitespace-pre-line">
          {tenant.description}
        </div>
      </section>
    </div>
  );
}
