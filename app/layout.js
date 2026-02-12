import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "株式会社サンプル建設",
  description: "地域密着の土木建築会社です"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <Header />
        <main style={{ padding: "30px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
