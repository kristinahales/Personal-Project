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
        console.log('hit add art project', req.body, req.session.user)
        let {name, image, instructions} = req.body;
        let {id} = req.session.user;
        const db = req.app.get('db');
        let projects = await db.add_art_project([
            name, 
            image, 
            instructions,
            id
        ]) 
        console.log(projects)
        res.send(projects)
    },

}

