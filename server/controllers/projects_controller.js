module.exports = {
    async getAllProjects(req, res) {
        let {id} = req.session.user;
        const db = req.app.get('db');
        let projects = await db.get_art_projects(id);
        res.send(projects);
    }
}