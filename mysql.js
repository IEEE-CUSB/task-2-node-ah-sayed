const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection({
    host: config.hostname,
    port: config.port,
    user: config.username,
    password: config.password,
    database: config.database
});

module.exports = connection