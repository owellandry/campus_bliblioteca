import express from "express";

// Controllers

import {authorization , getPrestamos, getReservas} from "../controllers/authController.js";

import authenticateToken from "../middleware/JWT.js";


// Middlewareq

import authDTO from "../middleware/auth_DTO.js";


const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

/* {
    "email": "juan.perez@example.com", -> String
    "tel": "+1234567890" -> String
} */

router.post(
  "/login",
  authDTO,
  authorization
);


router.get("/prestamos", authenticateToken, getPrestamos);

router.get("/reserva" , authenticateToken, getReservas);
export default router;