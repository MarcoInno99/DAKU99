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
  updatedAt: text("updated_at").notNull(),
});
