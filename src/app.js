const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/api/autores', require('./routes/index'));
app.use('/api/categorias', require('./routes/categoriaRoutes'));
app.use('/api/editoriales', require('./routes/editorialRoutes'));
app.use('/api/estados-libro', require('./routes/estadoLibroRoutes'));
app.use('/api/libros', require('./routes/libroRoutes'));
app.use('/api/prestamos', require('./routes/prestamoRoutes'));
app.use('/api/reservas', require('./routes/reservaRoutes'));
app.use('/api/usuarios', require('./routes/usuarioRoutes'));

app.listen(port, () => {
  console.log('Servidor en ejecución en http://localhost:' + port);
});

