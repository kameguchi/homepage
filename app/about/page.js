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

      <section className="py-16 px-6 bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow border border-black/5 overflow-hidden">
          <table className="w-full border-collapse text-sm md:text-base">
            <tbody>
              <tr className="border-b border-gray-200">
                <th className="text-left px-6 py-4 bg-gray-50 w-40">会社名</th>
                <td className="px-6 py-4">{tenant.siteName}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="text-left px-6 py-4 bg-gray-50">設立</th>
                <td className="px-6 py-4">2000年4月</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="text-left px-6 py-4 bg-gray-50">所在地</th>
                <td className="px-6 py-4">東京都〇〇区〇〇1-1-1</td>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="text-left px-6 py-4 bg-gray-50">代表取締役</th>
                <td className="px-6 py-4">山田 太郎</td>
              </tr>
              <tr>
                <th className="text-left px-6 py-4 bg-gray-50">事業内容</th>
                <td className="px-6 py-4">土木工事・建築工事・舗装工事</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
