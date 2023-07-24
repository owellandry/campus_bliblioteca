
import autores from "../models/autores.js";

const getAllautores = async (req, res) => {
    try {
        const respons = await autores.getAllautores();

        res.status(200).json(respons);
    } catch (error) {
        
    }
}

export { getAllautores }