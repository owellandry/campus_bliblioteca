import categoriaModel from '../models/categoriaModel.js';

// Función para listar todas las categorías disponibles
const listarCategorias = (req, res) => {
  // Aquí puedes utilizar el modelo para obtener los datos de las categorías desde la base de datos
  const categorias = ['Categoría 1', 'Categoría 2', 'Categoría 3', /* ... */];
  res.json(categorias);
};

export default {
  listarCategorias,
};
