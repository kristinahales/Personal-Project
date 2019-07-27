module.exports = {
    async getAllProjects(req, res) {
        let {id} = req.session.user;
        const db = req.app.get('db');
        let projects = await db.get_art_projects(id);
        res.send(projects);
    },
    async deleteProject(req, res) {
        let {projectId} = req.params
        let {id} = req.session.user;
        const db = req.app.get('db');
        let projects = await db.delete_art_project([+projectId, id])
        res.send(projects);
    },
    async addArtProject(req, res) {
        console.log(req.body)
        console.log(req.session.user.id)
        let {name, image, instructions, inventory_id, quantity} = req.body;
        let {id} = req.session.user;
        const db = req.app.get('db');
        let project = await db.add_art_project([
            name, 
            image, 
            instructions,
            id
        ]) 
        let allProjects = await db.add_inventory_to_project([project[0].id, inventory_id, +quantity, id])
        res.send(allProjects);
    },

    async filteredProjects(req, res) {
        let {id} = req.session.user;
        const db = req.app.get('db');
        let allProjects = await db.get_art_projects(id);
        let userInventory = await db.get_user_inventory(id);
        const filter = allProjects.filter(project => {
            return !project.inventory || hasEnoughInventory(project.inventory, userInventory);
        });
        res.send(filter)
    }
}

function hasEnoughInventory(projectInventory, userInventory) {
    for(let i=0; i < projectInventory.length; i++) {
        const match = userInventory.find(item => item.inventory_id === projectInventory[i].inventory_id)
        if(!match) return false;
        else if (match.quantity < projectInventory[i].quantity) return false;
    }
    return true;
}
