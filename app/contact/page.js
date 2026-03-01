import PageHero from "../../components/PageHero";
import { getCurrentTenant } from "../../lib/tenant";

export const metadata = {
  title: "お問い合わせ | 株式会社サンプル建設",
  description: "お問い合わせページです。"
};

export default async function Contact() {
  const tenant = await getCurrentTenant();

  return (
    <div>
      <PageHero title="お問い合わせ" lead="ご依頼・ご相談はお気軽にご連絡ください。" />

      <section className="py-16 px-6 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto bg-[var(--color-elevated)] rounded-xl shadow border border-[var(--color-border)] p-8 md:p-10">
          <p className="text-base md:text-lg mb-6">
            新築工事、リフォーム、公共工事に関するご相談を受け付けています。
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
            <div className="rounded-lg bg-[var(--color-surface)] p-4 border border-[var(--color-border)]">
              <p className="font-semibold mb-1">メール</p>
              <p>{tenant.email}</p>
            </div>
            <div className="rounded-lg bg-[var(--color-surface)] p-4 border border-[var(--color-border)]">
              <p className="font-semibold mb-1">電話</p>
              <p>{tenant.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
