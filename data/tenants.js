export const tenants = [
  {
    id: "sample",
    hosts: ["localhost", "sample.local"],
    siteName: "株式会社サンプル建設",
    catchcopy: "地域とともに歩む、確かな技術力",
    email: "info@example.co.jp",
    phone: "03-1234-5678",
    address: "東京都〇〇区〇〇1-2-3",
    theme: "classic"
  },
  {
    id: "modern-build",
    hosts: ["modern.local"],
    siteName: "モダンビルド株式会社",
    catchcopy: "次世代の建築を、もっと身近に。",
    email: "contact@modern-build.jp",
    phone: "06-0000-0000",
    address: "大阪府〇〇市〇〇2-3-4",
    theme: "modern"
  }
];

export const defaultTenant = tenants[0];
