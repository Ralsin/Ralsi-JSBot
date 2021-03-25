const sql = (
    require('mysql2').createPool({
        connectionLimit: 4,
        host: process.env.sqlHost,
        user: process.env.sqldb,
        password: process.env.pass,
        database: process.env.sqldb
    })
);
exports.db = sql;