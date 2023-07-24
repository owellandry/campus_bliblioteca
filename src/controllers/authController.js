import jwt from 'jsonwebtoken';

import users from "../models/usuario.js";
import jwtconfig from '../config/jwtconfig.js';

const authorization = async (req, res) => {
  const secretKey = jwtconfig.secret_key;

  try {

    const user = await users.getUser(Object.values(req.body));

    const auth = user.email === req.body['email'] && user.telefono == req.body['tel'];

    if (!auth) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    } else {
      // Generar el token JWT
      const token = jwt.sign({ id: user.id_usuario}, secretKey, {
        expiresIn: "1h",
      });

      // Responder con el token
      res.json({ token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error" });
  }
};

const getPrestamos = async (req, res) => {
    try {
        const result = await users.getPrestamos(req.user.id);

        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({mensaje : "Error al obtener los datos"})
    }
}

const getReservas = async (req, res) => {
    try {
        const result = await users.getReservas(req.user.id);

        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({mensaje : "Error al obtener los datos"})
    }
}

const getAll = async (req, res) => {
  try {
    
    const result = await users.getAll()

    res.status(200).json(result);

  } catch (error) {
    console.log(error);
  }
}

export {authorization , getPrestamos, getReservas ,getAll} ;