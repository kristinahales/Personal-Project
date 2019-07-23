SELECT * FROM projects
WHERE projects.user_id = $1
OR projects.is_public = true;

