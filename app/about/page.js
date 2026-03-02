import Image from "next/image";
import PageHero from "../../components/PageHero";
import { getCurrentTenant } from "../../lib/tenant";

export const metadata = {
  title: "会社概要 | 株式会社サンプル建設",
  description: "株式会社サンプル建設の会社概要ページです。"
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
                <th className="text-left px-6 py-4 bg-[var(--color-surface)]">設立</th>
                <td className="px-6 py-4">2000年4月</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left px-6 py-4 bg-[var(--color-surface)]">所在地</th>
                <td className="px-6 py-4">東京都〇〇区〇〇1-1-1</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left px-6 py-4 bg-[var(--color-surface)]">代表取締役</th>
                <td className="px-6 py-4">山田 太郎</td>
              </tr>
              <tr>
                <th className="text-left px-6 py-4 bg-[var(--color-surface)]">事業内容</th>
                <td className="px-6 py-4">土木工事・建築工事・舗装工事</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
