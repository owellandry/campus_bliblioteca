import mysql from "mysql2/promise";

import dbConfig from "../config/dbconfig.js";

/* instacia de la conexion a la base de datos */
const getConnection = async () => {
  return await mysql.createConnection(dbConfig);
};


const getAlllibrosEstadoDes = async () => {

  const Connection = await getConnection();

  try {
    
    const query = `SELECT t1.titulo, t2.descripcion, t2.nombre AS "estado" FROM libro AS t1
    INNER JOIN estado_libro AS t2 ON t1.id_estado = t2.id_estado;`;

    const [query_res] = await Connection.execute(query);

    return {
      mensaje: "Todos los libros y sus estados",
      data : query_res
    }


  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los libros" });
  }finally{
    Connection.end();
  }

}

const getAlllibrosAutorEdit = async () => {
  const Connection = await getConnection();

  try {
    const query = `SELECT t1.titulo, CONCAT(t2.nombre,' ',t2.apellido) AS "nombre_autor" , t3.nombre AS "editorial" FROM libro AS t1
    INNER JOIN autor AS t2 ON t1.id_categoria = t2.id_autor
    INNER JOIN editorial AS t3 ON t1.id_editorial = t3.id_editorial;`;

    const [query_get] = await Connection.execute(query);


    return {
      mensaje: "Todos los libros, sus autores y editoriales",
      data : query_get
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los libros" });
  }finally{
    Connection.end();
  }

}

const getAllDisponible = async () => {
  const Connection = await getConnection();

  try {
    
    const query = `SELECT t1.titulo , CONCAT(t3.nombre,' ',t3.apellido) AS "nombre_autor" FROM libro AS t1
    INNER JOIN estado_libro AS t2 ON t1.id_estado = t2.id_estado
    INNER JOIN autor AS t3 ON t1.id_autor = t3.id_autor
    WHERE t2.nombre = "Disponible";`;

    const [result] = await Connection.execute(query);

    return {
      mensaje : "libros disponibles",
      data : result
    }

  } catch (error) {
    console.log(error);
  }
}


const getAllPrestado = async () => {
  const Connection = await getConnection();

  try {
    
    const query = `SELECT t2.titulo, t1.fecha_devolucion FROM prestamo AS t1 
    INNER JOIN libro AS t2 ON t1.id_libro = t2.id_libro;`;

    const [result] = await Connection.execute(query);

    return {
      mensaje : "libros Prestado",
      data : result
    }

  } catch (error) {
    console.log(error);
  }
}


const getidAutor = async (id) => {
  const Connection = await getConnection();

  try {
    
    const query = `SELECT titulo FROM libro WHERE id_autor = ?;`;

    const [result] = await Connection.execute(query, [id]);

    return {
      mensaje : "libros por autor",
      data : result
    }

  } catch (error) {
    console.log(error);
  }
}

export default { getAlllibrosEstadoDes , getAlllibrosAutorEdit , getAllDisponible, getAllPrestado, getidAutor}