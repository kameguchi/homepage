import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>地域の未来をつくる建設会社</h2>

      <Image
        src="/company.jpg"
        alt="会社イメージ"
        width={800}
        height={400}
        style={{ borderRadius: "8px" }}
      />

      <p>
        私たちは地域密着型の土木建築会社です。
        公共工事・民間工事まで幅広く対応しています。
      </p>
    </div>
  );
}
