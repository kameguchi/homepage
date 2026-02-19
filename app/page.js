import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      
      <section className={styles.hero}>
        <Image
          src="/company.jpg"
          alt="会社外観"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className={styles.heroText}>
          <h1>未来をつくる建設会社</h1>
          <p>地域とともに歩む、確かな技術力</p>
          <button className={styles.cta}>お問い合わせ</button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>事業内容</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>新築工事</h3>
            <p>安全・高品質な施工を提供します。</p>
          </div>
          <div className={styles.card}>
            <h3>リフォーム</h3>
            <p>暮らしを快適にする改修工事。</p>
          </div>
          <div className={styles.card}>
            <h3>公共工事</h3>
            <p>地域社会に貢献するインフラ整備。</p>
          </div>
        </div>
      </section>

    </div>
  );
}
