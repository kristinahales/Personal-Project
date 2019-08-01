SELECT * from user_favorite_projects 
join projects 
on projects.id = user_favorite_projects.project_id
where user_favorite_projects.user_id = $1;
