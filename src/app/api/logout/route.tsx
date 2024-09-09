import axios from 'axios';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const refreshToken = cookies().get('rtk')?.value;
    const accessToken = cookies().get('atk')?.value;

    if (!refreshToken) {
        console.log('Not authenticated');
        return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    try {
        await axios.post(
            `${process.env.NEXT_PUBLIC_META_TEST_SERVER_HOST_URL}/auth/logout`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            },
        );

        cookies().delete('rtk');
        cookies().delete('atk');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to logout' }, { status: 401 });
    }
}
