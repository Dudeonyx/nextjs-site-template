// app/api/test-db/route.ts
import { NextResponse } from 'next/server';
import sql from '@/lib/db';

export async function GET() {
  try {
    const user = await sql.begin(async (tx) => {
      const [u] = await tx`
        INSERT INTO users (email, username, password_hash)
        VALUES ('johndoe@example.com', 'john', 'hashed_pw')
        RETURNING *
        `;

      await tx`
        INSERT INTO wallets (user_id, balance, currency)
        VALUES (${u.id}, 100, 'USD')
        `;

      return u;
    });

    return NextResponse.json({ success: true, user });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: 'unable to add user',
        error: error.message,
      },
      { status: 500 },
    );
  }
}
