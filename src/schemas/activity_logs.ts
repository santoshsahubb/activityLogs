// import {pgTable,PgTable, serial,TableConfig, varchar } from "drizzle-orm/pg-core";

// export const activityLogs<TableConfig> = pgTable("activity_logs", {
//     id: serial("id").primaryKey().notNull(),
//     userId: varchar("name", { length: 50 }).notNull(),
//     action: varchar("action", { length: 50 }).notNull(),
// });

// export const activityLogs : PgTable<TableConfig> = pgTable('activity_logs', {
//     id: serial('id').primaryKey(),
//     userId: varchar('user_id').notNull(),
//     action: varchar('action').notNull(),
//   });

import { pgTable, serial, varchar ,timestamp} from 'drizzle-orm/pg-core';

export const activityLogs = pgTable('activity_logs', {
  id: serial('id').primaryKey(),
  time_stamp: timestamp("time_stamp", { mode: "string" }).defaultNow(),

  user_id: varchar('user_id').notNull(),
  action: varchar('action').notNull(),
  service: varchar('service').notNull()

});