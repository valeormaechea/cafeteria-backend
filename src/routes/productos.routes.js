import { Router } from "express";
import {
  crearProducto,
  listarProductos,
  obtenerProducto,
  modificarProducto,
  eliminarProducto,
} from "../controllers/productos.controllers";
const router = Router(); // Instancia de router

/* Cuando alguien me haga una peticion get: declaro de donde hago la peticion, la ruta
Luego lo que va a pasar cuando se haga esa peticion en esa direccion
req = request, res = response
*/

// Crear todas las rutas de los productos
// dominio + /apicafe +/productos
router.route("/productos").get(listarProductos).post(crearProducto);

router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(modificarProducto)
  .delete(eliminarProducto);

export default router;

// app.get("/prueba", (req, res) => {
//   res.send("segunda peticion get");
// });
