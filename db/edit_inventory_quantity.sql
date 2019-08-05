UPDATE user_inventory
SET quantity = $2
WHERE inventory_id = $1
AND user_id = $3;


-- INSERT INTO user_inventory (inventory_id, quantity, user_id)
-- VALUES ($1, $2, $3)
-- ON CONFLICT  (inventory_id, quantity)
-- DO 
-- UPDATE
-- SET quantity = $2
-- WHERE inventory_id = $1
-- AND user_id = $3; 

SELECT * FROM inventory 
LEFT JOIN user_inventory
ON inventory.id = user_inventory.inventory_id
WHERE user_id = $3
ORDER BY name ASC;






