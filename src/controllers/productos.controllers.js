import Producto from "../models/producto";
import { validationResult } from "express-validator";

export const crearProducto = async (req, res) => {
  try {
    // Chequear que estoy recibiendo el body, el objeto que quiero crear
    console.log(req.body);
    // Validacion: agarrar el body y validarlo de vuelta
    const errors = validationResult(req);
    // Preguntar si tengo errores
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errores: errors.array(),
        // Si envio errors.array manda todos los errores
        // Con errors.mapped() envia el primer error
      });
    }
    // Crear un objeto para guardar en la bdd
    const productoNuevo = new Producto({
      nombreProducto: req.body.nombreProducto,
      imagen: req.body.imagen,
      precio: req.body.precio,
      categoria: req.body.categoria,
      descripcion: req.body.descripcion
    });
    // Guardar efectivamente en la bdd
    await productoNuevo.save();
    // Enviar respuesta
    res.status(201).json({
      mensaje: "El producto fue creado exitosamente",
    });
  } catch (error) {
    console.log(error);
    // Enviar respuesta al front end que no se pudo crear
    res.status(400).json({
      mensaje: "El producto enviado no pudo ser creado",
    });
  }
};

export const listarProductos = async (req, res) => {
  try {
    // Buscar en la bdd a collection de productos
    const listaProductos = await Producto.find();
    // Enviar la respuesta al front end
    res.status(200).json(listaProductos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los productos",
    });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    console.log(req.params.id);
    // Buscar en la bdd un producto
    const productoBuscado = await Producto.findById(req.params.id);
    // Enviar la respuesta al front end
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar el producto",
    });
  }
};

export const modificarProducto = async (req, res) => {
  try {
    // Validacion
    // Buscar el producto por el id y modificar el producto
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El producto fue modificado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar modificar el producto",
    });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    // Buscar un producto por el id en la collection de la bdd y luego borrar
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El producto fue eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar borrar el producto",
    });
  }
};
