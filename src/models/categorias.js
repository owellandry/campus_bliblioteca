import mysql from "mysql2/promise";

import dbConfig from "../config/dbconfig.js";

/* instacia de la conexion a la base de datos */
const getConnection = async () => {
  return await mysql.createConnection(dbConfig);
};


const getAllcategorias = async () => {

    const Connection = await getConnection();

    try {
        
        const query = `SELECT nombre FROM categoria;`

        const [query_get] = await Connection.execute(query);

        return {
            mensaje : "Todas las categorias",
            data : query_get
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener los datos" });
    }finally{
        Connection.end();
    }


}

export default { getAllcategorias }