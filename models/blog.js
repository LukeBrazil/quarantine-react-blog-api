const db = require('./conn');


class blogModel {
    constructor(id, content) {
        this.id = id;
        this.content = content;
    }
    static async getPosts() {
        try{
            const response = await db.any(`SELECT * FROM blog;`);
            return response;
        } catch(err) {
            return err
        }
    }

    static async getSinglepost(id) {
        try {
            const response = await db.one(`SELECT * FROM blog WHERE id = '${id}';`);
            return response;
        } catch (err) {
            return err
        }
    }

    static async getComments(id) {
        try {
            const response = await db.any(`SELECT * FROM comments 
            INNER JOIN blog ON blog.id = comments.post_id 
            WHERE blog.id = ${id} AND comments.post_id = ${id};`);
            return response
        } catch (err) {
            return err
        }
    }

    // *** TODO *** function for selecting comments
}

module.exports = blogModel;