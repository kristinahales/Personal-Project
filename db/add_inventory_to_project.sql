insert into project_inventory (project_id, inventory_id, quantity)
values ($1, $2, $3);

SELECT * FROM projects
WHERE projects.user_id = $4
OR projects.is_public = true;

