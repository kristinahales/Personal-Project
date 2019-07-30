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
    async deleteProject(req, res) {
        let {projectId} = req.params
        let {id} = req.session.user;
        const db = req.app.get('db');
        let projects = await db.delete_art_project([+projectId, id])
        res.status(200).send(projects);
    },
    async addArtProject(req, res) {
        let {name, image, instructions, projectItems} = req.body;
        let {id} = req.session.user;
        const db = req.app.get('db');
        let project = await db.add_art_project([
            name, 
            image, 
            instructions,
            id
        ])
        
            projectItems.forEach((obj) => {
            let {inventory_id, quantity} = obj
            db.add_inventory_to_project([project[0].id, inventory_id, +quantity, id])
        }) 

        let allProjects = await db.get_art_projects(id)
        let currentProjectLength = await db.project_inventory_length(project[0].id)
        console.log('firstallProjects.length', allProjects.length, projectItems.length)
        var count = 0
        async function lengthChecker() {
            console.log('hit lengthChecker', currentProjectLength[0].count)

            if(+currentProjectLength[0].count !== projectItems.length && count < 10) {
                currentProjectLength = await db.project_inventory_length(project[0].id)
                count++
                console.log(count)
                setTimeout(() => lengthChecker(), 500)
            } else if (+currentProjectLength[0].count === projectItems.length) {
                return console.log(allProjects = await db.get_art_projects(id));
            } else {
                console.log('error')
            }
    }
        lengthChecker();   
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
