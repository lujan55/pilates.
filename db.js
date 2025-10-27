const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE
});
module.exports = pool;
db.connect((err) => {
  if (err) {
    console.error('Error al conectar con MySQL Railway:', err);
    return;
  }
  console.log('Conectado correctamente a MySQL en Railway');
});

module.exports = db;
