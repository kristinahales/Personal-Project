DELETE FROM projects
WHERE id = $1;

SELECT * FROM projects 
WHERE user_id = $2;