SELECT * FROM inventory 
LEFT JOIN user_inventory
ON inventory.id = user_inventory.inventory_id;
