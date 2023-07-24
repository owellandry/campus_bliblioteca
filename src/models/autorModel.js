import mongoose from 'mongoose';

const autorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  nacionalidad: {
    type: String,
    required: true,
  },
  // Otros campos del modelo de autor
});

const Autor = mongoose.model('Autor', autorSchema);

export default Autor;
