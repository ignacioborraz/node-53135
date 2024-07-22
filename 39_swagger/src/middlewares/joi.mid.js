import CustomError from "../utils/errors/CustomError.js";

//es una funcion que depende del schema de validacion
//y que devuelve un middleware "para poder estar" entre la solicitud y la respuesta

function validator(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.body, { abortEarly: false });
    console.log(validation.error)
    if (validation.error) {
      const message = validation.error.details.map((error) => error.message);
      CustomError.new({ statusCode: 400, message });
    }
    return next();
  };
}

export default validator;
