import mysql from "mysql2/promise";

import dbConfig from "../config/dbconfig.js";

/* instacia de la conexion a la base de datos */
const getConnection = async () => {
  return await mysql.createConnection(dbConfig);
};

const getUser = async (data) => {
  const connection = await getConnection();

  try {
    const query_user = `SELECT id_usuario, email , telefono FROM usuario WHERE email = ? AND telefono = ?;`;

    const [result] = await connection.execute(query_user, data);

    if (!result.length) {
      return {
        id: "",
        email: "",
        telefono: ""
      };
    } else {
      return result[0];
    }
  } catch (error) {
    console.log(error);
  } finally {
    connection.end();
  }
};


const getPrestamos = async (id) => {
    const connection = await getConnection();
    try {
        
        const query = `SELECT fecha_prestamo, fecha_devolucion , estado FROM prestamo WHERE id_usuario = ?;`;

        const [result] = await connection.execute(query, [id]);

        return {
            mensaje : "Prestamos",
            data : result
        }

    } catch (error) {
        console.log(error);
    }finally{
        connection.end();
    }
}
    

const getReservas = async (id) => {
    const connection = await getConnection();

    try{
        const query = `SELECT fecha_reserva, estado FROM reserva WHERE id_usuario = ?;`

        const [result] = await connection.execute(query, [id])

        return {
            mensaje : "Reserva",
            data : result
        }
    }catch (error) {
        console.log(error);
    }finally{
        connection.end();
    }
}

const getAll = async () => {
  const connection = await getConnection();

  try {
    const query_user = `SELECT nombre , email FROM usuario;`;

    const [result] = await connection.execute(query_user);
  
    return {
      mensaje : "Users",
      data : result
    }
  
  }catch (error){

  }finally{
    connection.end()
  }
}

export default { getUser , getPrestamos, getReservas , getAll};