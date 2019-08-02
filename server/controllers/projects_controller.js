module.exports = {
    async getAllProjects(req, res) {
        let {id} = req.session.user;
        const db = req.app.get('db');
        let projects = await db.get_art_projects(id);
        const favorites = await db.get_favorite_projects(id);
        const updatedProjectList = projects.map(val => {
            const isFavorite = favorites.some(item => item.project_id === val.id);
            return {
                ...val,
                isFavorite
            }
        });
        res.status(200).send(updatedProjectList);
    },
    async deleteProject(req, res, next) {
        let {projectId} = req.params
        let {id} = req.session.user;
        const db = req.app.get('db');
        let projects = await db.delete_art_project([+projectId, id])
        next();
    },
    async addArtProject(req, res, next) {
        let {name, image, instructions, projectItems} = req.body;
        let {id} = req.session.user;
        const db = req.app.get('db');
        let project = await db.add_art_project([
            name, 
            image, 
            instructions,
            id
        ])
            await Promise.all(projectItems.map(async(obj) => {
            let {inventory_id, quantity} = obj
            await db.add_inventory_to_project([project[0].id, inventory_id, +quantity, id])
        }))
        next();

    },

    async filteredProjects(req, res) {
        let {id} = req.session.user;
        const db = req.app.get('db');
        let allProjects = await db.get_art_projects(id);
        let userInventory = await db.get_user_inventory(id);
        const filter = allProjects.filter(project => {
            return !project.inventory || hasEnoughInventory(project.inventory, userInventory);
        });
        res.status(200).send(filter)
    },
}

function hasEnoughInventory(projectInventory, userInventory) {
    for(let i=0; i < projectInventory.length; i++) {
        const match = userInventory.find(item => item.inventory_id === projectInventory[i].inventory_id)
        if(!match) return false;
        else if (match.quantity < projectInventory[i].quantity) return false;
    }
    return true;
}
