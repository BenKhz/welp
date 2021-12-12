const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'welp',
})


connection.connect((err) => {
    err ? console.log(err) : console.log("Connected to db")
});


module.exports = connection;