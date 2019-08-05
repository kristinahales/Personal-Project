SELECT inventory.id, inventory.name, inventory.image, case when user_inventory.quantity is null then 0 else user_inventory.quantity end as quantity
FROM inventory
LEFT JOIN user_inventory
ON inventory.id = user_inventory.inventory_id AND user_id= $1
ORDER BY name ASC;
