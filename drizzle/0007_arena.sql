CREATE TABLE IF NOT EXISTS arena_presence (
  team_slug TEXT PRIMARY KEY NOT NULL,
  user_email TEXT NOT NULL,
  last_seen TEXT NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS arena_matches (
  id TEXT PRIMARY KEY NOT NULL,
  challenger_team TEXT NOT NULL,
  opponent_team TEXT NOT NULL,
  mode TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  questions_json TEXT NOT NULL,
  current_round INTEGER NOT NULL DEFAULT 0,
  challenger_score INTEGER NOT NULL DEFAULT 0,
  opponent_score INTEGER NOT NULL DEFAULT 0,
  winner_team TEXT,
  created_at TEXT NOT NULL,
  started_at TEXT,
  finished_at TEXT
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS arena_answers (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  match_id TEXT NOT NULL,
  round INTEGER NOT NULL,
  team_slug TEXT NOT NULL,
  answer_index INTEGER NOT NULL,
  correct INTEGER NOT NULL,
  answered_at TEXT NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS idx_arena_answer_match_round_team ON arena_answers(match_id,round,team_slug);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS idx_arena_matches_players_status ON arena_matches(challenger_team,opponent_team,status);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS idx_arena_presence_last_seen ON arena_presence(last_seen);
