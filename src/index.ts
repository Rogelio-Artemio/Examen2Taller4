// import express from "express" 
// import dotenv from 'dotenv'
// import { productosRoutes } from "./routes/index.ts";

// dotenv.config({path: "/home/taller4O/productos/src/.env"});

// const app = express();
// const port = process.env.PORT;

// app.get("/",(req,res) => {
//     res.send("hola Api");
// });

// app.use("/productos", productosRoutes)

// app.listen(port, () => {
//     console.log(`Escuhando Puerto: ${port}`);
// });

import express from "express"
import dot from "dotenv"
import { productosRoutes } from "./routes/index.ts"

dot.config({path: "/home/taller4O/productos/src/.env"})

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Microservicio Productos!')
  })

app.use("/productos", productosRoutes)
  
// Iniciar servidor
app.listen(port, () => {
    console.log(`Microservicio de Productos corriendo en el puerto ${port}`);
});