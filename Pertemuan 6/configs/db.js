const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    databse: 'akademik'
});

db.connect((err) => {
    if (err) throw err;
    console.log('koneksi ke database MysQL berhasil!');
});

module.exports = db;