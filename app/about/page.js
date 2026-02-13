export const metadata = {
  title: "会社概要 | 株式会社サンプル建設",
  description: "株式会社サンプル建設の会社概要ページです。"
};

export default function About() {
  return (
    <div>
      <h2>会社概要</h2>

      <table style={styles.table}>
        <tbody>
          <tr>
            <th style={styles.th}>会社名</th>
            <td style={styles.td}>株式会社サンプル建設</td>
          </tr>
          <tr>
            <th style={styles.th}>設立</th>
            <td style={styles.td}>2000年4月</td>
          </tr>
          <tr>
            <th style={styles.th}>所在地</th>
            <td style={styles.td}>東京都〇〇区〇〇1-1-1</td>
          </tr>
          <tr>
            <th style={styles.th}>代表取締役</th>
            <td style={styles.td}>山田 太郎</td>
          </tr>
          <tr>
            <th style={styles.th}>事業内容</th>
            <td style={styles.td}>土木工事・建築工事・舗装工事</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  table: {
    borderCollapse: "collapse",
    width: "100%",
    maxWidth: "600px"
  },
  th: {
    textAlign: "left",
    padding: "10px",
    borderBottom: "1px solid #ccc",
    width: "150px",
    backgroundColor: "#f5f5f5"
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ccc"
  }
};
