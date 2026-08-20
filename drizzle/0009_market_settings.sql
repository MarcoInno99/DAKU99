CREATE TABLE IF NOT EXISTS `market_settings` (
  `id` integer PRIMARY KEY NOT NULL,
  `release_percentage` integer DEFAULT 75 NOT NULL,
  `updated_at` text NOT NULL,
  `updated_by` text NOT NULL
);
