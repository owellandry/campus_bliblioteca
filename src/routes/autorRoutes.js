import express from 'express';
const router = express.Router();

// Importar el controlador de autores
import autorController from '../controllers/autorController.js';

// Ruta para obtener todos los autores y su nacionalidad
router.get('/autores', autorController.obtenerAutores);

export default router;
