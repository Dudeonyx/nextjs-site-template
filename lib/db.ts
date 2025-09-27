import postgres from 'postgres';

const sql = postgres('postgresql://postgres:passtest4123@localhost:5432/', { ssl: 'prefer' });

export default sql;
