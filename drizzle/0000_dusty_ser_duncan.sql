CREATE TABLE "activity_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"time_stamp" timestamp DEFAULT now(),
	"user_id" varchar NOT NULL,
	"action" varchar NOT NULL,
	"service" varchar NOT NULL,
	"project_id" varchar NOT NULL
);
