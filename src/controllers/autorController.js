import autorModel from '../models/autorModel.js';

// Función para obtener todos los autores y su nacionalidad
const obtenerAutores = (req, res) => {
  // Aquí puedes utilizar el modelo para obtener los datos de los autores desde la base de datos
  const autores = [
    { nombre: 'Autor 1', nacionalidad: 'Nacionalidad 1' },
    { nombre: 'Autor 2', nacionalidad: 'Nacionalidad 2' },
    // ... Agregar más autores si es necesario
  ];
  res.json(autores);
};

export default {
  obtenerAutores,
};
