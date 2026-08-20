CREATE TABLE IF NOT EXISTS arena_solo_scores (
  team_slug TEXT PRIMARY KEY NOT NULL,
  total_points INTEGER NOT NULL DEFAULT 0,
  best_score INTEGER NOT NULL DEFAULT 0,
  sessions INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS idx_arena_solo_total_points ON arena_solo_scores(total_points DESC);
