import { NextResponse } from 'next/server';
import { Client } from 'pg';

export async function GET() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL_DEV,
  });

  try {
    await client.connect();
    const result = await client.query('SELECT NOW()');
    await client.end();

    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      serverTime: result.rows[0].now,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: 'Database connection failed',
      error: error.message,
    });
  }
}
