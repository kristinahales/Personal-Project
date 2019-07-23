update user_inventory
set quantity = $2
where inventory_id = $1;

SELECT * FROM inventory 
LEFT JOIN user_inventory
ON inventory.id = user_inventory.inventory_id
where user_id = $3;


