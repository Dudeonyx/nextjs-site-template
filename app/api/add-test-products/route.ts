import sql from '@/lib/db';
import { NextResponse } from 'next/server';

const test_products = [
  {
    name: 'WhatsApp',
    id: '1',
    description: 'Recieve sms for WhatsApp',
    price: 40,
  },
  {
    name: 'Google',
    id: '2',
    description: 'Recieve sms for Google',
    price: 50,
  },
  {
    name: 'Telegram',
    id: '3',
    description: 'Recieve sms for Telegram',
    price: 80,
  },
  {
    name: 'Facebook',
    id: '4',
    description: 'Recieve sms for Facebook',
    price: 20,
  },
];

export const GET = async () => {
  try {
    const products = await sql.begin(async (tx) => {
      return await tx`
            INSERT INTO products (id, name, description, price)
            VALUES ${tx(
              test_products.map(({ id, name, description, price }) => [
                id,
                name,
                description,
                price,
              ]),
            )}
            RETURNING *
            `;
    });

    return NextResponse.json(
      {
        success: true,
        message: products,
      },
      { status: 201 },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: 'Adding products failed',
        error: error.message,
      },
      { status: 500 },
    );
  }
};
