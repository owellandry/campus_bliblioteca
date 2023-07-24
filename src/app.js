import express from 'express';
import mongoose from 'mongoose';
import autorRoutes from './routes/autorRoutes.js';
import categoriaRoutes from './routes/categoriaRoutes.js';
import editorialRoutes from './routes/editorialRoutes.js';
import libroRoutes from './routes/libroRoutes.js';
import prestamoRoutes from './routes/prestamoRoutes.js';
import reservaRoutes from './routes/reservaRoutes.js';

const app = express();
const PORT = 5000;

// Conexión a la base de datos
mongoose.connect('mongodb://localhost/biblioteca-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middlewares
app.use(express.json());

// Rutas
app.use('/api', autorRoutes);
app.use('/api', categoriaRoutes);
app.use('/api', editorialRoutes);
app.use('/api', libroRoutes);
app.use('/api', prestamoRoutes);
app.use('/api', reservaRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
