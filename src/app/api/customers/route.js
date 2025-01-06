import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiRes = await fetch('https://tech0-gen9-step32-webapp-achkbecvgkfpc8gs.koreasouth-01.azurewebsites.net/allcustomers');
    
    if (!apiRes.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch customers' },
        { status: apiRes.status }
      );
    }

    const data = await apiRes.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in customer API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
