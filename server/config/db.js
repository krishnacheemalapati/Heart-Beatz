const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "heartbeatz",
password: "heartbeatz",
database:"workouts" 
})

module.exports = db;