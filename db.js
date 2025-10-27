const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

pool.getConnection((err, connection) => {
  if (err) console.error('❌ Error al conectar a MySQL:', err.message);
  else {
    console.log('✅ Conectado a MySQL correctamente');
    connection.release();
  }
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
