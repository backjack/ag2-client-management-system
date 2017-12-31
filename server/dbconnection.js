var mysql = require('mysql');
var connection = mysql.createConnection({

    host: 'dummy',
    user: 'dummy',
    password: 'dummy',
    database: 'dummy'
});

connection.connect();

module.exports = connection;  