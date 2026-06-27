import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeProvider from "../components/ThemeProvider";
import { getCurrentTenant } from "../lib/tenant";
import "./globals.css";

export const metadata = {
  title: "株式会社TOM",
  description: "太陽光発電・蓄電池事業で持続可能な未来を創造する"
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }) {
  const tenant = await getCurrentTenant();

  return (
    <html lang="ja">
      <body className="m-0 font-sans bg-[var(--color-bg)] text-[var(--color-text)]">
        <ThemeProvider initialTheme={tenant.theme}>
          <Header tenant={tenant} />
          <main className="w-full">
            {children}
          </main>
          <Footer tenant={tenant} />
        </ThemeProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [];
}
