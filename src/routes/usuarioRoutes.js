import express from 'express';
import { obtenerAutores, agregarAutor } from '../controllers/autorController.js';

const router = express.Router();

// Ruta para obtener todos los autores
router.get('/autores', obtenerAutores);

// Ruta para agregar un nuevo autor
router.post('/autores', agregarAutor);


export default router;
