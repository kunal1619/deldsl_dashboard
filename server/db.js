// server/db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '192.168.10.10',
  user: 'librenmsuser',
  password: 'power@8010',
  database: 'librenmsdb',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MariaDB:', err);
  } else {
    console.log('Connected to MariaDB');
  }
});

module.exports = connection;
