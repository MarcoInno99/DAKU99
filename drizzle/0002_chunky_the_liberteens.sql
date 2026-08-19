CREATE TABLE `club_identity` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`team_slug` text NOT NULL,
	`user_email` text NOT NULL,
	`avatar_json` text NOT NULL,
	`kit_json` text NOT NULL,
	`crest_key` text,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `club_identity_team_slug_unique` ON `club_identity` (`team_slug`);