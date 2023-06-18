var mysql = require('mysql2');
var db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root", // my username
    password: "0000", // my password
    database: "myform"
});
db.connect();

module.exports = db;