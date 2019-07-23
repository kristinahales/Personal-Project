INSERT INTO projects (name, image, instructions, user_id)
VALUES ($1, $2, $3, $4);

SELECT * FROM projects
WHERE projects.user_id = $4
OR projects.is_public = true;

