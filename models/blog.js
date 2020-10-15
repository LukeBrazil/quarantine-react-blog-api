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

    static async getSinglepost() {
        try {
            const response = await db.one(`SELECT * FROM restaurants WHERE id = '${id}';`);
            return response;
        } catch (err) {
            return err
        }
    }

    // *** TODO *** function for selecting comments
}

module.exports = blogModel;