module.exports = {
    async getAllInventory(req, res) {
        let {id} = req.session.user
        const db = req.app.get('db');
        let inventory = await db.get_inventory([id]);
        res.send(inventory);
    },
    async editQuantity(req, res) {
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
    },
    async getLowInventory(req, res) {
        const db = req.app.get('db');
        let {id} = req.session.user;
        let lowInventory = await db.get_low_inventory([id]);
        res.send(lowInventory);
    }
}