import { validationResult } from "express-validator";

const resultadosValidacion = (req, res, next) => {
  const errors = validationResult(req);
  // Preguntar si tengo errores
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errores: errors.array(),
      // Si envio errors.array manda todos los errores
      // Con errors.mapped() envia el primer error
    });
  }
  // Next hace que continue con el flujo del codigo
  next();
};

export default resultadosValidacion;