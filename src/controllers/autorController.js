// autorController.js
import Autor from '../models/autorModel.js';

// Ejemplo de función para obtener todos los autores
export const obtenerAutores = async (req, res) => {
  try {
    const autores = await Autor.find();
    res.json(autores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los autores' });
  }
};

// Ejemplo de función para agregar un nuevo autor
export const agregarAutor = async (req, res) => {
  try {
    const nuevoAutor = new Autor(req.body);
    await nuevoAutor.save();
    res.json(nuevoAutor);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar un nuevo autor' });
  }
};

// Agregar otras funciones según sea necesario...
