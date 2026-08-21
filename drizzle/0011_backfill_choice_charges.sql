INSERT INTO `team_credit_adjustments` (`team_slug`,`season`,`reference`,`amount`,`note`,`created_at`,`created_by`)
SELECT
  `team_slug`,
  `season`,
  'societal-choices',
  -(
    CASE WHEN `sporting_director`=1 THEN CASE WHEN `third_choice`='sportingDirector' THEN 19 ELSE 25 END ELSE 0 END +
    CASE WHEN `stadium`=1 THEN CASE WHEN `third_choice`='stadium' THEN 23 ELSE 30 END ELSE 0 END +
    CASE WHEN `medical_center`=1 THEN CASE WHEN `third_choice`='prestanome' THEN 8 ELSE 10 END ELSE 0 END +
    CASE WHEN `youth_academy`=1 THEN CASE WHEN `third_choice`='youthAcademy' THEN 15 ELSE 20 END ELSE 0 END +
    CASE WHEN `training_center`=1 THEN CASE WHEN `third_choice`='trainingCenter' THEN 27 ELSE 35 END ELSE 0 END
  ),
  'Costo scelte societarie stagione corrente',
  `updated_at`,
  `user_email`
FROM `club_choices`
WHERE `season`='2027-2028' AND `locked_at` IS NOT NULL
ON CONFLICT(`team_slug`,`season`,`reference`) DO UPDATE SET
  `amount`=excluded.`amount`,
  `note`=excluded.`note`;
