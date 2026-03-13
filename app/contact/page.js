import PageHero from "../../components/PageHero";
import { getCurrentTenant } from "../../lib/tenant";

export const metadata = {
  title: "お問い合わせ | 株式会社サンプル建設",
  description: "お問い合わせページです。"
};

function AccessIcon({ type }) {
  if (type === "train") {
    return (
      <svg className="w-7 h-7 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="6" y="3" width="12" height="13" rx="2" />
        <path d="M8 7h8M9 11h2m4 0h0" />
        <path d="M8 16l-2 4m10-4l2 4M9 20h6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className="w-7 h-7 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default async function Contact() {
  const tenant = await getCurrentTenant();
  const content = tenant.contactAccessPage;

  return (
    <div>
      <PageHero title={content.heroTitle} lead={content.heroLead} />

      <section className="relative overflow-hidden py-[var(--section-padding-y)] px-[var(--section-padding-x)] bg-[var(--color-surface)]">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_12%_18%,rgba(198,167,94,0.22),transparent_48%),radial-gradient(circle_at_86%_0%,rgba(15,23,42,0.14),transparent_38%)]" />

        <div className="relative max-w-6xl mx-auto space-y-10">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]/92 backdrop-blur-sm shadow-[var(--shadow-card)] p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">{content.accessTitle}</h2>

            <div className="grid gap-4 md:gap-5">
              {(content.accessCards || []).map((card) => (
                <article key={card.title} className="grid grid-cols-[72px_1fr] items-stretch rounded-xl overflow-hidden border border-[var(--color-border)] bg-white/60">
                  <div className="flex items-center justify-center bg-[var(--color-primary)]/9 border-r border-[var(--color-border)]">
                    <AccessIcon type={card.icon} />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">{card.title}</h3>
                    <div className="space-y-1.5 text-[var(--color-text)]/90 leading-7">
                      {(card.lines || []).map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {content.map?.embedUrl ? (
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-8 items-stretch">
              <section className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]/90 backdrop-blur-sm shadow-[var(--shadow-card)] min-h-[360px]">
                <iframe
                  src={content.map.embedUrl}
                  title={content.map.title || "Googleマップ"}
                  className="h-full min-h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </section>

              <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]/88 backdrop-blur-sm shadow-[var(--shadow-card)] p-6 md:p-8 flex flex-col justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold tracking-[0.24em] uppercase text-[var(--color-accent)] mb-3">Map</p>
                  <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-4">{content.map.title}</h3>
                  <p className="text-[var(--color-text)]/88 leading-8">{content.map.description}</p>
                </div>

                <a
                  href={content.map.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)]"
                >
                  {content.map.linkLabel || "Googleマップで開く"}
                </a>
              </section>
            </div>
          ) : null}

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 md:gap-8">
            {(content.infoColumns || []).map((column) => (
              <section key={column.title} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]/88 backdrop-blur-sm shadow-[var(--shadow-card)] p-6 md:p-8">
                <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-5">{column.title}</h3>
                <div className="space-y-4 text-lg">
                  {(column.items || []).map((item) => (
                    <div key={`${column.title}-${item.label || item.value}`} className="text-[var(--color-text)]/92 leading-8">
                      {item.label ? (
                        <p>
                          <span className="font-semibold">{item.label}</span>
                          <span className="font-semibold"> : </span>
                          {item.href ? (
                            <a className="font-semibold underline decoration-[var(--color-accent)] underline-offset-4 hover:text-[var(--color-primary)]" href={item.href}>
                              {item.value}
                            </a>
                          ) : (
                            <span className="font-medium">{item.value}</span>
                          )}
                        </p>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)]/86 backdrop-blur-sm shadow-[var(--shadow-card)] p-6 md:p-8">
            <div className="space-y-6 text-[var(--color-text)]/92 text-lg leading-9">
              {(content.body || []).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
