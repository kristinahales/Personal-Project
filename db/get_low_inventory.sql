SELECT * FROM inventory 
LEFT JOIN user_inventory
ON inventory.id = user_inventory.inventory_id
WHERE user_inventory.user_id = $1
AND quantity < 2; 

