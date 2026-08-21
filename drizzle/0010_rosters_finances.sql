CREATE TABLE `imported_roster_players` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `team_slug` text NOT NULL,
  `player_name` text NOT NULL,
  `club` text NOT NULL,
  `role` text NOT NULL,
  `age` integer DEFAULT 0 NOT NULL,
  `cost` integer DEFAULT 0 NOT NULL,
  `quotation` integer DEFAULT 0 NOT NULL,
  `fvm` integer DEFAULT 0 NOT NULL,
  `fuori_lista` text,
  `row_order` integer DEFAULT 0 NOT NULL,
  `import_batch` text NOT NULL,
  `imported_at` text NOT NULL,
  `imported_by` text NOT NULL
);
CREATE UNIQUE INDEX `idx_imported_roster_team_player` ON `imported_roster_players` (`team_slug`,`player_name`);
CREATE INDEX `idx_imported_roster_team_order` ON `imported_roster_players` (`team_slug`,`row_order`);
CREATE TABLE `team_credit_adjustments` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `team_slug` text NOT NULL,
  `season` text NOT NULL,
  `reference` text NOT NULL,
  `amount` integer NOT NULL,
  `note` text,
  `created_at` text NOT NULL,
  `created_by` text NOT NULL
);
CREATE UNIQUE INDEX `idx_credit_adjustment_reference` ON `team_credit_adjustments` (`team_slug`,`season`,`reference`);
