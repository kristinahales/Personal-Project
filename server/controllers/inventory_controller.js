module.exports = {
    async getAllInventory(req, res) {
        const db = req.app.get('db');
        let inventory = await db.get_inventory();
        res.send(inventory);
    },
    async editQuantity(req, res) {
        console.log(req.session.user.id);
        console.log(req.params);
        let {inventoryId} = req.params;
        let {updatedQty} = req.body;
        let {id} = req.session.user
        const db = req.app.get('db');
        let inventory = await db.edit_inventory_quantity([
            +inventoryId,
            +updatedQty,
            id
        ]); 
        res.send(inventory);
    }
}