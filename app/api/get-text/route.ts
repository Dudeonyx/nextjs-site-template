import sql from '@/lib/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const response = await fetch('https://getatext.com/api/v1/prices-info', {
      method: 'GET',
      headers: {
        Auth: process.env.GETATEXT_API_KEY!,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok)
      return NextResponse.json({
        status: response.status,
        message: 'fetching prices from gettext failed',
        error: await response.json(),
      });

    const prices = await response.json();
    return NextResponse.json({
      status: response.status,
      message: prices,
    });
  } catch (err: any) {
    return NextResponse.json({
      status: 500,
      message: 'fetching prices from gettext failed',
      error: err.message,
    });
  }
};
