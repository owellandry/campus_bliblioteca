
import editores from "../models/editores.js";

const getAlleditor = async (req, res) => {
    try {
        const respons = await editores.getAlleditor();

        res.status(200).json(respons);
    } catch (error) {
        
    }
}

export { getAlleditor }