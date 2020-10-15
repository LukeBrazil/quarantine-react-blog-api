const host = 'raja.db.elephantsql.com';
const database = 'oipslpgn';
const user = 'oipslpgn';
const password = 'UZSVpCS3beFNVEj-ouxuuIVgsiSNgRei';

const pgp = require('pg-promise')({
    query: function(e) {
        console.log("Query: ", e.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password
}

const db = pgp(options);

module.exports = db;
