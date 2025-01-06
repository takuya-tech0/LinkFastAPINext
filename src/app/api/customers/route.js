import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // プロセス環境変数はサーバーサイドでのみアクセス可能
    const apiRes = await fetch(`${process.env.API_ENDPOINT}/allcustomers`);
    
    if (!apiRes.ok) {
      // バックエンドからのエラーをハンドリング
      return NextResponse.json(
        { error: 'Failed to fetch customers' },
        { status: apiRes.status }
      );
    }

    const data = await apiRes.json();
    return NextResponse.json(data);
  } catch (error) {
    // その他のエラーをハンドリング
    console.error('Error in customer API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}