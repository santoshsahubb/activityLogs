import { defineConfig } from 'drizzle-kit';
export default defineConfig({
	out: './drizzle',
	schema: './src/schema/index.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: 'postgressql://postgres:password@postgres-service:5432/santoshsahu',  // enable it to run on local
	},
});