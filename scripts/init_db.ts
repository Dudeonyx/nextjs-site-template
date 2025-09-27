// scripts/init-schema.ts
import sql from '../lib/db.ts';

async function init() {
  await sql.begin(async (tx) => {
    // Users
    await tx`
      CREATE TABLE IF NOT EXISTS users (
        id BIGSERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        username VARCHAR(100) UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `;

    // Wallets
    await tx`
      CREATE TABLE IF NOT EXISTS wallets (
        id BIGSERIAL PRIMARY KEY,
        user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        balance NUMERIC(18,8) DEFAULT 0 CHECK (balance >= 0),
        currency VARCHAR(10) DEFAULT 'USD',
        updated_at TIMESTAMP DEFAULT NOW(),
        UNIQUE(user_id)
      );
    `;

    // Products
    await tx`
      CREATE TABLE IF NOT EXISTS products (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price NUMERIC(18,2) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;

    // Purchases
    await tx`
      CREATE TABLE IF NOT EXISTS purchases (
        id BIGSERIAL PRIMARY KEY,
        user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        product_id BIGINT REFERENCES products(id),
        amount NUMERIC(18,2) NOT NULL,
        currency VARCHAR(10) DEFAULT 'USD',
        purchased_at TIMESTAMP DEFAULT NOW()
      );
    `;

    // Transactions
    await tx`
      CREATE TABLE IF NOT EXISTS transactions (
        id BIGSERIAL PRIMARY KEY,
        wallet_id BIGINT NOT NULL REFERENCES wallets(id) ON DELETE CASCADE,
        type VARCHAR(20) NOT NULL CHECK (type IN ('deposit', 'withdrawal', 'purchase', 'refund')),
        amount NUMERIC(18,8) NOT NULL CHECK (amount > 0),
        balance_after NUMERIC(18,8) NOT NULL,
        reference_id BIGINT,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;
  });

  console.log('✅ Schema created');
  await sql.end();
}

init().catch((err) => {
  console.error(err);
  process.exit(1);
});
