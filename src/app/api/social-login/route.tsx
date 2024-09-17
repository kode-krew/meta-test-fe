import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const { code, socialType } = await request.json();
    console.log(code, socialType, '타입은?');
    const response = NextResponse.json({ success: true });
    return response;
}
