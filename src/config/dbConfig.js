const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'campus',
  password: 'campus2023',
  database: 'db_campus_bliblioteca'
});

dbConnection.connect((err) => {
  if (err) throw err;
  console.log('Conexión a la base de datos exitosa.');
});

module.exports = dbConnection;

