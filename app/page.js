import Image from "next/image";
import Link from "next/link";
import { getCurrentTenant } from "../lib/tenant";
import AchievementPhotoStrip from "../components/AchievementPhotoStrip";

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

const AccessInfoIcon = ({ type }) => {
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
};

export default async function Home() {
  const tenant = await getCurrentTenant();
  const achievementsSection = tenant.achievementsSection;
  const strengthsSection = tenant.strengthsSection;
  const contactAccessSection = tenant.contactAccessPage;

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
        <div className="absolute inset-0 hero-overlay"></div>

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

      {strengthsSection?.items?.length ? (
        <section className="py-[var(--section-padding-y)] px-[var(--section-padding-x)] bg-[var(--color-surface)]">
          <h2 className="text-2xl font-bold mb-12 text-center">{strengthsSection.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {strengthsSection.items.map((item) => (
              <div key={item.title} className="bg-[var(--color-primary)] p-8 rounded-xl shadow border border-[var(--color-border)]">
                <h3 className="text-[var(--color-elevated)] text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-[var(--color-elevated)]">{item.description}</p>
                <ul className="list-disc list-inside text-sm text-[var(--color-elevated)] mt-2">
                  {(item.points || []).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="py-20 max-w-6xl mx-auto">
            {(strengthsSection.closing || []).map((paragraph) => (
              <p key={paragraph} className="text-[var(--color-primary)] font-semibold">{paragraph}</p>
            ))}
          </div>

        </section>
      ) : null}

      {achievementsSection?.stats?.length ? (
        <section className="relative overflow-hidden py-[var(--section-padding-y)] px-[var(--section-padding-x)] bg-[var(--color-bg)]">
          {achievementsSection.visual?.image ? (
            <>
              <Image
                src={achievementsSection.visual.image}
                alt={achievementsSection.visual.alt || "実績紹介背景"}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(19, 17, 17, 0.62)] via-[rgba(148, 75, 75, 0.56)] to-[rgba(248,250,252,0.68)]" />
            </>
          ) : null}

          <div className="relative z-10 max-w-6xl mx-auto rounded-[32px] border border-[var(--color-border)] bg-white/32 shadow-[var(--shadow-card)] backdrop-blur-[1px]">
            <div className="p-8 md:p-12 lg:p-14">
                <p className="text-sm font-semibold tracking-[0.24em] uppercase text-[var(--color-accent)] mb-4">{achievementsSection.eyebrow}</p>
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-10">{achievementsSection.title}</h2>

                <div className="grid gap-4 md:grid-cols-3 mb-10">
                  {(achievementsSection.stats || []).map((stat) => (
                    <div
                      key={`${stat.value}-${stat.label}`}
                      className="h-full min-w-0 overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white/55 backdrop-blur-[1px] px-5 py-6 shadow-sm"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      <p className="mb-3 max-w-full whitespace-nowrap text-[clamp(1.6rem,3vw,2.7rem)] leading-none font-semibold tracking-[-0.02em] text-[var(--color-primary)]">
                        {stat.value}
                      </p>
                      <p className="text-lg font-semibold text-[var(--color-primary)] mb-2">{stat.label}</p>
                      <p className="text-sm leading-6 text-[var(--color-text)]/70">{stat.description}</p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-5 md:grid-cols-2 mb-10">
                  {(achievementsSection.lists || []).map((list) => (
                    <div key={list.title} className="rounded-[24px] border border-[var(--color-border)] bg-white/52 backdrop-blur-[1px] px-6 py-6">
                      <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">{list.title}</h3>
                      <ul className="space-y-3 text-[var(--color-text)]/92">
                        {(list.items || []).map((entry) => (
                          <li key={entry} className="flex gap-3 leading-7">
                            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                            <span>{entry}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 rounded-[24px] border border-[var(--color-border)] bg-white/50 backdrop-blur-[1px] px-6 py-7 md:px-8 md:py-9">
                  {(achievementsSection.body || []).map((paragraph) => (
                    <p key={paragraph} className="text-base md:text-lg leading-9 text-[var(--color-text)]/85">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <AchievementPhotoStrip
                  storageKey="achievementPhotos"
                  title={achievementsSection.galleryTitle}
                  lead={achievementsSection.galleryLead}
                  initialPhotos={achievementsSection.galleryPhotos || []}
                />
            </div>
          </div>
        </section>
      ) : null}

      {contactAccessSection ? (
        <section className="relative overflow-hidden py-[var(--section-padding-y)] px-[var(--section-padding-x)] bg-[var(--color-surface)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(198,167,94,0.22),transparent_35%),radial-gradient(circle_at_84%_8%,rgba(15,23,42,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.65),rgba(245,245,244,0.8))]" />

          <div className="relative max-w-7xl mx-auto rounded-[36px] border border-[var(--color-border)] bg-[var(--color-elevated)]/82 shadow-[0_22px_55px_rgba(15,23,42,0.14)] backdrop-blur-md overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(125deg,rgba(255,255,255,0.56)_0%,rgba(255,255,255,0.12)_38%,rgba(255,255,255,0.54)_100%)]" />

            <div className="relative grid lg:grid-cols-[1.08fr_0.92fr] gap-0">
              <div className="p-8 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,0.64))]">
                <div className="mb-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold tracking-[0.24em] uppercase text-[var(--color-accent)] mb-3">Access</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">{contactAccessSection.accessTitle}</h2>
                  </div>
                  <div className="hidden md:block h-px w-24 bg-gradient-to-r from-[var(--color-accent)]/80 to-transparent" />
                </div>

                <div className="grid gap-4">
                  {(contactAccessSection.accessCards || []).map((card) => (
                    <article key={card.title} className="group grid grid-cols-[78px_1fr] rounded-2xl overflow-hidden border border-[var(--color-border)] bg-white/74 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                      <div className="flex items-center justify-center border-r border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(198,167,94,0.18))]">
                        <AccessInfoIcon type={card.icon} />
                      </div>
                      <div className="p-5 md:p-6">
                        <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">{card.title}</h3>
                        <div className="space-y-1.5 text-[var(--color-text)]/92 leading-7">
                          {(card.lines || []).map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {contactAccessSection.map?.embedUrl ? (
                  <section className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white/72 shadow-sm">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border)] bg-white/70">
                      <h3 className="text-xl font-bold text-[var(--color-primary)]">{contactAccessSection.map.title || "Googleマップ"}</h3>
                      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--color-accent)]">Map</span>
                    </div>
                    <iframe
                      src={contactAccessSection.map.embedUrl}
                      title={contactAccessSection.map.title || "Googleマップ"}
                      className="w-full h-72 md:h-80"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </section>
                ) : null}
              </div>

              <div className="p-8 md:p-10 lg:p-12 bg-[linear-gradient(180deg,rgba(255,255,255,0.74),rgba(245,245,244,0.72))]">
                <div className="grid grid-cols-1 gap-5 mb-8">
                  {(contactAccessSection.infoColumns || []).map((column) => (
                    <section key={column.title} className="rounded-2xl border border-[var(--color-border)] bg-white/74 p-5 md:p-6 shadow-sm">
                      <div className="mb-4 pb-3 border-b border-[var(--color-border)]/60">
                        <h3 className="text-2xl font-bold text-[var(--color-primary)]">{column.title}</h3>
                      </div>
                      <div className="space-y-3 text-base leading-8 text-[var(--color-text)]/92">
                        {(column.items || []).map((item) => (
                          <div key={`${column.title}-${item.label || item.value}`}>
                            {item.label ? (
                              <p>
                                <span className="font-semibold">{item.label}</span>
                                <span className="font-semibold"> : </span>
                                {item.href ? (
                                  <a href={item.href} className="font-semibold underline decoration-[var(--color-accent)] underline-offset-4 hover:text-[var(--color-primary)]">
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

                <div className="space-y-5 rounded-2xl border border-[var(--color-border)] bg-white/66 p-6 md:p-7 shadow-sm">
                  {(contactAccessSection.body || []).map((paragraph) => (
                    <p key={paragraph} className="text-base md:text-lg leading-8 text-[var(--color-text)]/90">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)]"
                  >
                    アクセス・お問い合わせを見る
                  </Link>
                  {contactAccessSection.map?.linkUrl ? (
                    <a
                      href={contactAccessSection.map.linkUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white/76 px-6 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-white"
                    >
                      {contactAccessSection.map.linkLabel || "Googleマップで開く"}
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

    </div>
  );
}
