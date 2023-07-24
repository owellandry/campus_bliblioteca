import mysql from "mysql2/promise";

import dbConfig from "../config/dbconfig.js";

/* instacia de la conexion a la base de datos */
const getConnection = async () => {
  return await mysql.createConnection(dbConfig);
};


const getAlleditor = async () => {

    const Connection = await getConnection();

    try {
        
        const query = `SELECT nombre, direccion FROM editorial;`

        const [query_get] = await Connection.execute(query);

        return {
            mensaje : "Todas las editoriales",
            data : query_get
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener los datos" });
    }finally{
        Connection.end();
    }


}

export default { getAlleditor }