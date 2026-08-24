const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'mysql-db-va-pkl-gussakral.j.aivencloud.com',
    port: 10073,
    user: 'avnadmin',
    password: process.env.DB_PASSWORD,
    database: 'defaultdb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: {
        rejectUnauthorized: false
    }
});

db.getConnection((err, connection) => {
    if (err) {
        console.error('Yah, gagal konek ke database:', err);
        return;
    }
    console.log('Yeay! Berhasil konek ke Aiven!');
    connection.release();
});

module.exports = db;