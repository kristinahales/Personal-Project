insert into project_inventory (project_id, inventory_id, quantity)
values ($1, $2, $3);

select p.*,
(select json_agg(i)
    from (
    select pi.project_id, pi.inventory_id, pi.quantity
    from project_inventory as pi
    join inventory as iv
    on pi.inventory_id = iv.id
    ) as i
    where i.project_id=p.id
) as inventory
from projects as p
WHERE p.user_id = $4
OR p.is_public = true;


