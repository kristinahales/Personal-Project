select * from projects
where projects.user_id = $1
or projects.is_public = true;