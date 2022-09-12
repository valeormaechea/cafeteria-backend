import express from "express";
import morgan from "morgan";
import cors from "cors";
// const express = require ("express");

// Instancia de express
const app = express();

// Queremos tomar un puerto de la pc
// Si es local, no tenemos problema, puede ser fijo
// En el backend donde publique mi proyecto, me van a dar una variable de entorno con un puerto
// Si existe, que la tome
app.set("port", process.env.PORT || 4000);
// Crea una variable de nombre port, con el PORT en la variable de entorno, o le da el puerto 4000

// Quiero que mi backend se inicialize y quede en ese puerto
// Que quede escuchando ese puerto
app.listen(app.get("port"), () => {
  console.log(`Estamos en el puerto numero ${app.get("port")}`);
});

console.log("funciona nodemon");

// Si ejecuto npm start luego de esto, y no puedo escribir en ella, es
// porque esta en ejecucion el backend, hasta que lo apague
// Si hago cambios en el codigo y quiero que impacten, debo cortar
// la ejecucion y volver a arrancar
// Nodemon hace eso automaticamente
// npm install -g nodemon

// "scripts": {
//     "start": "babel-node index.js",
//     "dev": "nodemon --exec babel-node index.js"
//   },
// Cualquier otro comando que no sea start, se ejecuta con npm run nombre

// Middlewares
app.use(morgan("dev")); // Da informacion en la terminal
app.use(cors()); // Permite recibir peticiones remotas
// Los dos middlewares debajo sirven para procesar un objeto Json que eventualmente va a llegar
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Cargar un archivo estatico
app.use(express.static("./public"));
// Rutas
/* Cuando alguien me haga una peticion get: declaro de donde hago la peticion, la ruta
Luego lo que va a pasar cuando se haga esa peticion en esa direccion
req = request, res = response
*/
app.get("/", (req, res) => {
  res.send("primera peticion get");
});

// app.get("/prueba", (req, res) => {
//   res.send("segunda peticion get");
// });
