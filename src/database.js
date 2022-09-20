import mongoose from "mongoose";

// Base de datos local
// const url = "mongodb://localhost:27017/cafeteria";

// Base de datos en la nube
const url =
  "mongodb+srv://valeormaechea:Branka1527@clustercafeteria.ri6wlpy.mongodb.net/test";

mongoose.connect(url);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("BD conectada");
});

// Si tengo errores inexplicables en la conexion con la bb
/*
const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("BD conectada");
  } catch (error) {
    console.log(error);
  }
};

connectDB();
*/
