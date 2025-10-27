const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT || 3306,
  connectTimeout: 10000
});

// Verificación inicial
pool.getConnection((err, conn) => {
  if (err) {
    console.error('❌ Error de conexión a MySQL:', err.message);
  } else {
    console.log('✅ Conexión establecida con MySQL');
    conn.release();
  }
});

// Keep alive cada 5 min
setInterval(() => {
  pool.query('SELECT 1', (err) => {
    if (err) console.error('⚠️ Error keep-alive MySQL:', err.message);
  });
}, 1000 * 60 * 5);

module.exports = pool;
