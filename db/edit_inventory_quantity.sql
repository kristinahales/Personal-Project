INSERT INTO user_inventory (inventory_id, quantity, user_id)
VALUES ($1, $2, $3)
ON CONFLICT  (inventory_id, user_id)
DO 
UPDATE
SET quantity = $2; 

SELECT inventory.id, inventory.name, inventory.image, case when user_inventory.quantity is null then 0 else user_inventory.quantity end as quantity
FROM inventory
LEFT JOIN user_inventory
ON inventory.id = user_inventory.inventory_id AND user_id= $3
ORDER BY name ASC;







