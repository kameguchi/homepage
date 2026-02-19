"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.topRow}>
        <h1 style={styles.logo}>株式会社サンプル建設</h1>

        <button
          style={styles.menuButton}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      <nav style={{
        ...styles.nav,
        display: open ? "flex" : ""
      }}>
        <Link href="/">ホーム</Link>
        <Link href="/about">会社概要</Link>
        <Link href="/contact">お問い合わせ</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#003366",
    color: "white",
    padding: "10px 20px"
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    fontSize: "18px"
  },
  menuButton: {
    fontSize: "24px",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer"
  },
  nav: {
    display: "none",
    flexDirection: "column",
    gap: "10px",
    marginTop: "10px"
  }
};