-- select p.*,
-- (select json_agg(i)
--     from (
--     select pi.project_id, pi.inventory_id, pi.quantity, ui.quantity as user_quantity
--     from project_inventory as pi
--     left join user_inventory as ui on pi.inventory_id = ui.inventory_id and ui.user_id = $1
--     ) as i
--     where i.project_id=p.id
-- ) as inventory
-- from projects as p;