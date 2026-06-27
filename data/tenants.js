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
    nameCeo: "神薗 斗夢",
    // 既存の workDetails は互換性のため残すが新しい構造を追加
    workDetails1: "太陽光発電所EPC(設計・調達・施工)",
    workDetails2: "系統用蓄電池事業",
    workDetails3: "土木・建築工事一式",
    workDetails4: "不動産活用支援",
    businessItems: [
      { title: "太陽光発電所EPC", subtitle: "企画・設計から施工・保守まで一貫対応。確かな施工品質で高い発電効率を実現します。豊富な経験と最新技術を活用し、お客様のご要望に応じた最適なシステム設計をご提案いたします。環境アセスメントから始まり、詳細設計、機器調達、施工管理、竣工検査まで、プロジェクト全体を責任を持って管理致します。", icon: "solar-panel" },
      { title: "系統用蓄電池事業", subtitle: "再生可能エネルギーの普及に伴う需要調整に対応し、安定した電力供給を支援します。系統安定化技術と最先端の蓄電池システムにより、電力の品質向上と効率的な運用を実現いたします。ピークカットやロードシフト機能により、電力コストの削減と環境負荷の低減を同時に達成します。", icon: "battery" },
      { title: "建設工事・土木工事", subtitle: "地域に根差した施工体制で、安全・迅速・高品質な工事を提供します。長年の建設業界での経験を活かし、複雑な地形条件や厳しい好機要求にも柔軟に対応いたします。安全管理を最優先とし、地域住民の皆様との調和を図りながら、確実なプロジェクト完遂を目指します。", icon: "home" },
    ],
    achievementsSection: {
      eyebrow: "Works",
      title: "実績紹介",
      description: "太陽光発電所の設計・施工・保守を通じて積み重ねてきた実績を、数値と具体例の両面からご紹介します。",
      galleryTitle: "施工写真ギャラリー",
      galleryLead: "実績紹介に関連する写真を横並びで掲載しています。",
      galleryPhotos: [
        { id: "ach-photo-1", src: "/company2.jpg", alt: "施工実績写真 1" },
        { id: "ach-photo-2", src: "/company3.jpg", alt: "施工実績写真 2" },
        { id: "ach-photo-3", src: "/company4.jpg", alt: "施工実績写真 3" }
      ],
      stats: [
        {
          value: "50MW+",
          label: "累計施工容量",
          description: "これまでに手がけた太陽光発電所の総発電容量"
        },
        {
          value: "40",
          label: "主要プロジェクト",
          description: "大規模発電所の建設実績"
        },
        {
          value: "10MW",
          label: "単体最大容量",
          description: "一つの発電所としての最大規模"
        }
      ],
      visual: {
        image: "/company6.jpg",
        alt: "",
        eyebrow: "Project Overview",
        title: "大規模太陽光発電所を一貫して支える施工体制",
        description: "立地条件や系統条件を踏まえた設計から、施工管理、竣工後の保守運用まで、現場ごとに最適化した体制で対応しています。"
      },
      lists: [
        {
          title: "主要実績",
          items: [
            "2023年：宮城県 太陽光発電所（10MW）",
            "2024年：三重県 太陽光発電所（10MW）"
          ]
        },
        {
          title: "技術的特徴",
          items: [
            "高効率モジュールの採用",
            "最適な架台設計による発電量最大化",
            "遠隔監視システムによる運用最適化"
          ]
        }
      ],
      body: [
        "弊社では、これまでに宮城県と三重県において10MWクラスの大規模太陽光発電所を手がけ、累計で50MW以上の施工実績を積み重ねております。各プロジェクトにおいて、地域の気候条件や地形特性を十分に考慮した設計を行い、最適な発電効率の実現を追求してまいりました。",
        "施工においては、安全管理を最優先とし、工期の遵守と品質の確保を両立させております。また、竣工後の保守運用においても、遠隔監視システムの活用により、安定した発電量の維持をサポートしております。これらの実績を通じて蓄積された技術とノウハウを、今後のプロジェクトにも活かしてまいります。"
      ]
    },
    strengthsSection: {
      title: "強み・特徴",
      items: [
        {
          title: "一貫体制",
          description: "設計～施工～保守までをワンストップでサービスを提供",
          points: ["プロジェクト管理の効率化", "品質の統一とコスト最適化", "迅速な問題解決とサポート"]
        },
        {
          title: "豊富な実績",
          description: "発電所・蓄電池の施行多数の経験値",
          points: ["累計施工容量50MW以上", "多様な地域・条件での実績", "高い顧客満足度の維持"]
        },
        {
          title: "専門資格",
          description: "電気工事士核保有による確実な施工",
          points: ["有資格者による安全な作業", "法令順守の徹底", "技術力の継続的向上"]
        },
        {
          title: "スピード対応",
          description: "小規模～大規模案件まで柔軟対応",
          points: ["迅速な見積もりと提案", "効率的な工程管理", "お客様のスケジュールに合わせた対応"]
        }
      ],
      closing: [
        "弊社の最大の強みは、太陽光発電・蓄電池事業における総合的な対応力です。",
        "設計段階から保守運用まで一貫してサポートすることで、お客様にとって最適なソリューションを提供いたします。",
        "また、豊富な実績に裏打ちされた技術力と、有資格者による確実な施工体制により、高品質なサービスをお約束いたします。"
      ]
    },
    contactAccessPage: {
      heroTitle: "アクセス・お問い合わせ",
      heroLead: "本社へのアクセス情報とご相談窓口をご案内します。",
      accessTitle: "アクセス",
      map: {
        title: "Googleマップ",
        description: "所在地の詳細確認や経路検索はGoogleマップをご利用ください。",
        embedUrl: "https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E5%85%AD%E6%9C%AC%E6%9C%A86-1-20%20%E5%85%AD%E6%9C%AC%E6%9C%A8%E9%9B%BB%E6%B0%97%E3%83%93%E3%83%AB7F&output=embed",
        linkUrl: "https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E5%85%AD%E6%9C%AC%E6%9C%A86-1-20%20%E5%85%AD%E6%9C%AC%E6%9C%A8%E9%9B%BB%E6%B0%97%E3%83%93%E3%83%AB7F",
        linkLabel: "Googleマップで開く"
      },
      accessCards: [
        {
          icon: "map-pin",
          title: "本社所在地",
          lines: ["東京都港区六本木6-1-20 六本木電気ビル7F"]
        },
        {
          icon: "train",
          title: "最寄駅",
          lines: ["六本木駅より徒歩圏内", "東京メトロ日比谷線・都営大江戸線"]
        }
      ],
      infoColumns: [
        {
          title: "お問い合わせ",
          items: [
            { label: "TEL", value: "03-6890-2416" },
            { label: "メール", value: "t.kamizono2024@outlook.jp", href: "mailto:t.kamizono2024@outlook.jp" }
          ]
        },
        {
          title: "営業時間",
          items: [
            { value: "平日 9:00-18:00" },
            { value: "お気軽にお問い合わせください" }
          ]
        }
      ],
      body: [
        "弊社は東京都港区六本木の中心部に位置し、各方面からのアクセスが良好な立地にございます。六本木駅から徒歩圏内という利便性の高い場所で、お客様との打ち合わせやご相談を承っております。",
        "太陽光発電・蓄電池事業に関するご質問やプロジェクトのご相談など、どのようなことでもお気軽にお声がけください。経験豊富なスタッフが、お客様のニーズに合わせた最適なソリューションをご提案いたします。持続可能なエネルギー社会の実現に向けて、共に歩んでまいりましょう。"
      ]
    },
    aboutPage: {
      metadataTitle: "会社概要 | 株式会社TOM",
      metadataDescription: "株式会社TOMの会社概要ページです。",
      heroTitle: "会社概要",
      heroLead: "地域社会に寄り添い、確かな品質で未来を築きます。",
      heroImage: {
        src: "/company2.jpg",
        alt: "会社外観"
      },
      labels: {
        companyName: "会社名",
        address: "所在地",
        founded: "設立",
        capital: "資本金",
        ceo: "代表取締役",
        business: "事業内容"
      },
      capital: "100万円",
      profileImage: {
        src: "/company4.jpg",
        alt: ""
      }
    },
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
    contactAccessPage: {
      heroTitle: "アクセス・お問い合わせ",
      heroLead: "アクセス情報とご相談窓口のご案内です。",
      accessTitle: "アクセス",
      map: {
        title: "Googleマップ",
        description: "所在地の確認やルート検索にGoogleマップをご利用いただけます。",
        embedUrl: "https://www.google.com/maps?q=%E5%A4%A7%E9%98%AA%E5%BA%9C%E3%80%87%E3%80%87%E5%B8%82%E3%80%87%E3%80%872-3-4&output=embed",
        linkUrl: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%E5%BA%9C%E3%80%87%E3%80%87%E5%B8%82%E3%80%87%E3%80%872-3-4",
        linkLabel: "Googleマップで開く"
      },
      accessCards: [
        {
          icon: "map-pin",
          title: "本社所在地",
          lines: ["大阪府〇〇市〇〇2-3-4"]
        },
        {
          icon: "train",
          title: "最寄駅",
          lines: ["最寄駅より徒歩5分", "詳細はお問い合わせください"]
        }
      ],
      infoColumns: [
        {
          title: "お問い合わせ",
          items: [
            { label: "TEL", value: "06-0000-0000" },
            { label: "メール", value: "contact@modern-build.jp", href: "mailto:contact@modern-build.jp" }
          ]
        },
        {
          title: "営業時間",
          items: [
            { value: "平日 9:00-18:00" },
            { value: "ご相談は随時受付中" }
          ]
        }
      ],
      body: [
        "弊社オフィスは主要エリアからアクセスしやすい立地にあり、初回相談から具体的な要件整理まで丁寧に対応いたします。",
        "建築・施工に関するご相談はもちろん、プロジェクト初期の企画段階からでもお気軽にお問い合わせください。"
      ]
    },
    aboutPage: {
      metadataTitle: "会社概要 | モダンビルド株式会社",
      metadataDescription: "モダンビルド株式会社の会社概要ページです。",
      heroTitle: "会社概要",
      heroLead: "次世代の建築を、もっと身近に。",
      heroImage: {
        src: "/company2.jpg",
        alt: "会社外観"
      },
      labels: {
        companyName: "会社名",
        address: "所在地",
        founded: "設立",
        capital: "資本金",
        ceo: "代表取締役",
        business: "事業内容"
      },
      capital: "100万円",
      profileImage: {
        src: "/company4.jpg",
        alt: ""
      }
    },
    theme: "modern"
  }
];

export const defaultTenant = tenants[0];
