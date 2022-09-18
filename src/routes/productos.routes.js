import { Router } from "express";
import {
  crearProducto,
  listarProductos,
  obtenerProducto,
  modificarProducto,
  eliminarProducto,
} from "../controllers/productos.controllers";
import { check } from "express-validator";
const router = Router(); // Instancia de router

/* Cuando alguien me haga una peticion get: declaro de donde hago la peticion, la ruta
Luego lo que va a pasar cuando se haga esa peticion en esa direccion
req = request, res = response
*/

// Crear todas las rutas de los productos
// dominio + /apicafe +/productos
router
  .route("/productos")
  .get(listarProductos)
  .post(
    [
      check(
        "nombreProducto",
        "El nombre del producto es un valor obligatorio"
      ).notEmpty(),
      check(
        "nombreProducto",
        "El producto debe tener entre 2 y 50 caracteres"
      ).isLength({ min: 2, max: 50 }),
      check("precio", "El precio es un valor obligatorio").notEmpty(),
      check("precio").custom((value) => {
        if (value >= 0 && value <= 9999) {
          return true;
        } else {
          throw new Error("El precio debe estar entre 0 y 9999");
        }
      }),
    ], crearProducto
  );

router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(modificarProducto)
  .delete(eliminarProducto);

export default router;

// app.get("/prueba", (req, res) => {
//   res.send("segunda peticion get");
// });
