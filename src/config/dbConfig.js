const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'nombre_de_tu_base_de_datos'
});

dbConnection.connect((err) => {
  if (err) throw err;
  console.log('Conexión a la base de datos exitosa.');
});

module.exports = dbConnection;

