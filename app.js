import dotenv  from "dotenv"
import express  from "express";
import cookieParser from "cookie-parser";

//Modulos propios
import configureApp from "./src/config/express.js";

// Rutas
import routas_publicas from './src/routes/publics.js';
import router_user from "./src/routes/usuario.js";


dotenv.config()

const app = express();

// Configurar la aplicación Express
configureApp(app);

app.use(cookieParser());

// Definir las rutas
app.use('/api',routas_publicas);
app.use('/api/auth',router_user);






// Variables de entorno
const PORT = process.env.PORT || 4080;



//Get all employees from the database


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })