CREATE TABLE `club_choices` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`team_slug` text NOT NULL,
	`season` text DEFAULT '2027-2028' NOT NULL,
	`user_email` text NOT NULL,
	`sporting_director` integer DEFAULT false NOT NULL,
	`stadium` integer DEFAULT false NOT NULL,
	`formation` text,
	`lineup_json` text,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_club_choices_team_season` ON `club_choices` (`team_slug`,`season`);