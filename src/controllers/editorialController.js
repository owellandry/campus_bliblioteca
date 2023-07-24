import editorialModel from '../models/editorialModel.js';

// Función para mostrar todas las editoriales y sus direcciones
const mostrarEditoriales = (req, res) => {
  // Aquí puedes utilizar el modelo para obtener los datos de las editoriales desde la base de datos
  const editoriales = [
    { nombre: 'Editorial 1', direccion: 'Dirección 1' },
    { nombre: 'Editorial 2', direccion: 'Dirección 2' },
    // ... Agregar más editoriales si es necesario
  ];
  res.json(editoriales);
};

export default {
  mostrarEditoriales,
};
