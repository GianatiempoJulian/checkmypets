//! Principal para funcionamiento !//
//!==============================================================!//

//? Cosas basicas para funcionamiento:
import express from 'express'
import cors from 'cors';
import pkg from 'body-parser';
import fetch from "node-fetch";
const { urlencoded } = pkg;

//? Inicializacion de cosas:
const app = express();
const PORT = process.env.PORT || 5000;
app.use(urlencoded({ extended: true }))

//? Configuración de dirname:
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//! Middleware !//
//!==============================================================!//
// Middleware para procesar JSON
app.use(express.json());

//! Base de Datos !//
//!==============================================================!//
import { connection } from './db/connect.mjs';

//! Routers !//
app.use(cors());
//!==============================================================!//
//? Mascotas ?//:
import { petRouter } from './routes/petRoutes.mjs';
app.use("/api/pet", petRouter);

//? Usuarios ?//:
import { userRouter } from './routes/userRoutes.mjs';
app.use("/api/user", userRouter);

//? Medicina ?//:
import { medicineRouter } from './routes/medicineRoutes.mjs';
app.use("/api/medicine", medicineRouter);

//! Desarrollo !//
//!==============================================================!//

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

//? Escuchamos al servidor ?//
//?==============================================================?//
app.listen(PORT, () => {
    connection
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});
