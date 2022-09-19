import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    unique: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 0,
    max: 9999,
  },
  categoria: {
    type: String,
    required: true,
  },
  descripcion:{
    type: String,
    required: false,
    maxlength: 100,
  }
});

const Producto = mongoose.model('producto', productoSchema);

export default Producto;