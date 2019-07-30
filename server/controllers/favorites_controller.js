module.exports = {
    async addFavorite(req, res) {
        let {id} = req.session.user;
        let {projectId} = req.params;
        const db = req.app.get('db');
        await db.add_to_favorites([id, +projectId])
        res.sendStatus(200);
    },
    async getFavoriteProjects(req, res) {
        let {id} = req.session.user;
        const db = req.app.get('db');
        let favoriteProjects = await db.get_favorite_projects(id);
        res.status(200).send(favoriteProjects);
    },
    async deleteFavorite(req, res) {
        let {id} = req.session.user;
        let {projectId} = req.params;
        const db = req.app.get('db');
        await db.delete_favorite_project([id, projectId]);
        res.sendStatus(200);
    }

}