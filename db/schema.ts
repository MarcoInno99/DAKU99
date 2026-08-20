import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const clubChoices = sqliteTable("club_choices", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  teamSlug: text("team_slug").notNull(),
  season: text("season").notNull().default("2027-2028"),
  userEmail: text("user_email").notNull(),
  sportingDirector: integer("sporting_director", { mode: "boolean" }).notNull().default(false),
  stadium: integer("stadium", { mode: "boolean" }).notNull().default(false),
  medicalCenter: integer("medical_center", { mode: "boolean" }).notNull().default(false),
  youthAcademy: integer("youth_academy", { mode: "boolean" }).notNull().default(false),
  trainingCenter: integer("training_center", { mode: "boolean" }).notNull().default(false),
  thirdChoice: text("third_choice"),
  lockedAt: text("locked_at"),
  formation: text("formation"),
  lineupJson: text("lineup_json"),
  updatedAt: text("updated_at").notNull(),
}, (table) => [
  uniqueIndex("idx_club_choices_team_season").on(table.teamSlug, table.season),
]);

export const clubIdentity = sqliteTable("club_identity", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  teamSlug: text("team_slug").notNull().unique(),
  userEmail: text("user_email").notNull(),
  avatarJson: text("avatar_json").notNull(),
  kitJson: text("kit_json").notNull(),
  crestKey: text("crest_key"),
  coachName: text("coach_name"),
  updatedAt: text("updated_at").notNull(),
});

export const minigameBets = sqliteTable("minigame_bets", {
  id: integer("id").primaryKey({ autoIncrement: true }), teamSlug: text("team_slug").notNull(),
  userEmail: text("user_email").notNull(), season: text("season").notNull(), round: integer("round").notNull(),
  mode: text("mode").notNull(), picksJson: text("picks_json").notNull(), status: text("status").notNull().default("pending"),
  baseReward: integer("base_reward").notNull().default(0), awardedCredits: integer("awarded_credits").notNull().default(0),
  streak: integer("streak").notNull().default(0), lockedAt: text("locked_at").notNull(), settledAt: text("settled_at"),
  winThreshold: integer("win_threshold").notNull().default(5),
}, (table) => [uniqueIndex("idx_minigame_team_round").on(table.teamSlug, table.season, table.round)]);

export const teamMemberships = sqliteTable("team_memberships", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").notNull().unique(),
  userEmail: text("user_email").notNull().unique(),
  teamSlug: text("team_slug").notNull(),
  createdAt: text("created_at").notNull(),
});

export const clubSponsors = sqliteTable("club_sponsors", {
  id: integer("id").primaryKey({ autoIncrement: true }), teamSlug: text("team_slug").notNull(),
  season: text("season").notNull(), sponsorSlug: text("sponsor_slug").notNull(),
  userEmail: text("user_email").notNull(), lockedAt: text("locked_at").notNull(),
}, (table) => [uniqueIndex("idx_club_sponsors_team_season").on(table.teamSlug, table.season)]);

export const marketSettings = sqliteTable("market_settings", {
  id: integer("id").primaryKey(), releasePercentage: integer("release_percentage").notNull().default(75),
  updatedAt: text("updated_at").notNull(), updatedBy: text("updated_by").notNull(),
});

export const arenaPresence = sqliteTable("arena_presence", {
  teamSlug: text("team_slug").primaryKey(), userEmail: text("user_email").notNull(), lastSeen: text("last_seen").notNull(),
});

export const arenaMatches = sqliteTable("arena_matches", {
  id: text("id").primaryKey(), challengerTeam: text("challenger_team").notNull(), opponentTeam: text("opponent_team").notNull(),
  mode: text("mode").notNull(), status: text("status").notNull().default("pending"), questionsJson: text("questions_json").notNull(),
  currentRound: integer("current_round").notNull().default(0), challengerScore: integer("challenger_score").notNull().default(0),
  opponentScore: integer("opponent_score").notNull().default(0), winnerTeam: text("winner_team"), createdAt: text("created_at").notNull(),
  startedAt: text("started_at"), finishedAt: text("finished_at"),
});

export const arenaAnswers = sqliteTable("arena_answers", {
  id: integer("id").primaryKey({ autoIncrement: true }), matchId: text("match_id").notNull(), round: integer("round").notNull(),
  teamSlug: text("team_slug").notNull(), answerIndex: integer("answer_index").notNull(), correct: integer("correct", { mode: "boolean" }).notNull(), answeredAt: text("answered_at").notNull(),
}, (table) => [uniqueIndex("idx_arena_answer_match_round_team").on(table.matchId, table.round, table.teamSlug)]);

export const arenaSoloScores = sqliteTable("arena_solo_scores", {
  teamSlug: text("team_slug").primaryKey(), totalPoints: integer("total_points").notNull().default(0),
  bestScore: integer("best_score").notNull().default(0), sessions: integer("sessions").notNull().default(0),
  updatedAt: text("updated_at").notNull(),
});
