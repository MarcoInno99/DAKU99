CREATE TABLE IF NOT EXISTS `team_memberships` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`user_email` text NOT NULL,
	`team_slug` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `idx_team_memberships_user_id` ON `team_memberships` (`user_id`);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `idx_team_memberships_email` ON `team_memberships` (`user_email`);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `idx_team_memberships_team` ON `team_memberships` (`team_slug`);
