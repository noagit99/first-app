CREATE TABLE IF NOT EXISTS "expenses" (
	"id" varchar PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"amount" numeric NOT NULL,
	"date" timestamp NOT NULL
);
