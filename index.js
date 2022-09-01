import express from "express";
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