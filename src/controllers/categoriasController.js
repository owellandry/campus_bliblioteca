
import categorias from "../models/categorias.js";

const getAllcategorias = async (req, res) => {
    try {
        const respons = await categorias.getAllcategorias();

        res.status(200).json(respons);
    } catch (error) {
        
    }
}

export { getAllcategorias }