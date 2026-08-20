CREATE TABLE IF NOT EXISTS `club_sponsors` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`team_slug` text NOT NULL,
	`season` text NOT NULL,
	`sponsor_slug` text NOT NULL,
	`user_email` text NOT NULL,
	`locked_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `idx_club_sponsors_team_season` ON `club_sponsors` (`team_slug`,`season`);
--> statement-breakpoint
ALTER TABLE `club_choices` ADD `third_choice` text;
--> statement-breakpoint
ALTER TABLE `minigame_bets` ADD `win_threshold` integer DEFAULT 5 NOT NULL;
