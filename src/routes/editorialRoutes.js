import express from 'express';
const router = express.Router();

// Importar el controlador de editoriales
import editorialController from '../controllers/editorialController.js';

// Ruta para mostrar todas las editoriales y sus direcciones
router.get('/editoriales', editorialController.mostrarEditoriales);

export default router;
