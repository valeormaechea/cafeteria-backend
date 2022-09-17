import Producto from "../models/producto";

export const crearProducto = async (req, res) => {
  try {
    // Chequear que estoy recibiendo el body, el objeto que quiero crear
    console.log(req.body);
    // Validacion: agarrar el body y validarlo de vuelta
    // Crear un objeto para guardar en la bdd
    const productoNuevo = new Producto({
      nombreProducto: req.body.nombreProducto,
      imagen: req.body.imagen,
      precio: req.body.precio,
      categoria: req.body.categoria,
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

export const listarProductos = (req, res) => {
  res.send("enviar lista de productos");
};

export const obtenerProducto = (req, res) => {
  res.send("obtener producto");
};

export const modificarProducto = (req, res) => {
  res.send("modificar producto");
};

export const eliminarProducto = (req, res) => {
  res.send("eliminar producto");
};
