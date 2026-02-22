## テナント追加手順（コード修正なし運用）

1. `data/tenants.js` に新しいテナント設定を追加する
2. `hosts` に利用ドメインを追記する（例: `client-a.example.com`）
3. `siteName` / `catchcopy` / `email` / `phone` / `address` / `theme` を設定する
4. Render 側で該当ドメインを同一サービスへ向ける
5. ブラウザで対象ドメインへアクセスして表示切替を確認する

### 補足

- デザイン提案時は `?theme=classic|modern|minimal` で即時切替可能
- ユーザーの選択テーマは `localStorage` に保存される
