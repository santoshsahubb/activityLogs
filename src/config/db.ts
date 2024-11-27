import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from "../schemas";


const pool = new Pool({
  user: 'postgres',
  // host: 'localhost',         // enable it to run on local
  host: 'postgres-service',
  database: 'santoshsahu',
  password: 'password',
  port: 5432,
});

export const db = drizzle(pool,{
    schema: {
        ...schema,
      }
});


(async () => {
  try {
    await db.execute(`SELECT 1`);
    console.log("postgres connection successful!!!");
  } catch (error) {
    console.error("postgres connection failed:", error);
  }
})();