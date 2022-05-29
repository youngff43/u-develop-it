const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // My MySQL username,
  user: 'root',
  // My MySQL password
  password: 'Charlie89',
  database: 'election'
});

module.exports = db;