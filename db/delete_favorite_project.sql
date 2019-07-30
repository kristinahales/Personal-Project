DELETE from user_favorite_projects
WHERE project_id = $2 
AND user_id = $1;