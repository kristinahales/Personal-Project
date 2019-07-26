UPDATE user_inventory
SET quantity = $2
WHERE inventory_id = $1
AND user_id = $3;

SELECT * FROM inventory 
LEFT JOIN user_inventory
ON inventory.id = user_inventory.inventory_id
WHERE user_id = $3;



