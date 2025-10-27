const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT || 3306
});

setInterval(() => pool.query('SELECT 1'), 300000); // keep-alive cada 5 min

module.exports = pool;
