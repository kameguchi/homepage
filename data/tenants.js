export const tenants = [
  {
    id: "sample",
    hosts: ["localhost", "sample.local"],
    siteName: "株式会社TOM",
    catchcopy: "太陽光発電・蓄電池事業で持続可能な未来を創造する",
    email: "t.kamizono2024@outlook.jp",
    phone: "03-1234-5678",
    address: "106-0032 東京都港区六本木6-1-20 六本木電機ビル7F",
    since: "2025年8月28日",
    nameCeo: "上薗 十夢",
    // 既存の workDetails は互換性のため残すが新しい構造を追加
    workDetails1: "太陽光発電所EPC(設計・調達・施工)",
    workDetails2: "系統用蓄電池事業",
    workDetails3: "土木・建築工事一式",
    workDetails4: "不動産活用支援",
    businessItems: [
      { title: "太陽光発電所EPC", subtitle: "設計・調達・施工" },
      { title: "系統用蓄電池事業", subtitle: "再生可能エネルギーの安定化をサポート" },
      { title: "土木・建築工事一式", subtitle: "インフラから建築までトータル対応" },
      { title: "不動産活用支援", subtitle: "土地資産の最適化をお手伝い" }
    ],
    description: `株式会社TOMは、持続可能なエネルギー社会の実現に向けて、太陽光発電と蓄電池技術を核とした総合的なソリューションを提供しています。
豊富な実績と確かな技術力により、お客様のニーズに最適な再生可能エネルギーシステムをご提案いたします。`,
    history: [
      {
        year: "2025年8月28日",
        title: "株式会社TOM設立",
        description: "持続可能なエネルギー事業への取り組みを開始。太陽光発電・蓄電池分野での事業展開を決意し、東京都港区六本木に本社を構えました。"
      }
    ],
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
