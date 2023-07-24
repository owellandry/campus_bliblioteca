import mysql from "mysql2/promise";

import dbConfig from "../config/dbconfig.js";

/* instacia de la conexion a la base de datos */
const getConnection = async () => {
  return await mysql.createConnection(dbConfig);
};


const getAllautores = async () => {

    const Connection = await getConnection();

    try {
        
        const query = `SELECT CONCAT(nombre ,' ',apellido) AS "nombre_completo" , nacionalidad FROM autor`

        const [query_get] = await Connection.execute(query);

        return {
            mensaje : "Todos los autores",
            data : query_get
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener los datos" });
    }finally{
        Connection.end();
    }


}

export default { getAllautores }