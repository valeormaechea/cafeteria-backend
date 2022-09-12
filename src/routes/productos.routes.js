import { Router } from "express";
const router = Router(); // Instancia de router

/* Cuando alguien me haga una peticion get: declaro de donde hago la peticion, la ruta
Luego lo que va a pasar cuando se haga esa peticion en esa direccion
req = request, res = response
*/

// Crear todas las rutas de los productos
// dominio + /apicafe +/
router.route("/").get((req, res) => {
  res.send("Primera peticion get");
  // .put
});

export default router;

// app.get("/prueba", (req, res) => {
//   res.send("segunda peticion get");
// });
