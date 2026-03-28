import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const adminUser = process.env.ADMIN_USER || "admin";
    const adminPassword = process.env.ADMIN_PASSWORD || "admin1234";

    if (username === adminUser && password === adminPassword) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { ok: false, message: "ユーザー名またはパスワードが正しくありません。" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, message: "ログイン処理に失敗しました。" },
      { status: 400 }
    );
  }
}
