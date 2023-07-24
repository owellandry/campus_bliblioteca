import express from 'express';
const router = express.Router();

// Importar el controlador de categorías
import categoriaController from '../controllers/categoriaController.js';

// Ruta para listar todas las categorías disponibles
router.get('/categorias', categoriaController.listarCategorias);

export default router;
