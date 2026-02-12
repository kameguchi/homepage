import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>株式会社サンプル建設</h1>
      <nav>
        <Link href="/" style={styles.link}>ホーム</Link>
        <Link href="/about" style={styles.link}>会社概要</Link>
        <Link href="/contact" style={styles.link}>お問い合わせ</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "#003366",
    color: "white"
  },
  logo: {
    margin: 0
  },
  link: {
    marginLeft: "20px",
    color: "white",
    textDecoration: "none"
  }
};
