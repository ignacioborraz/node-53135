import joi from "joi-oid";

const usersSchema = joi.object({
  first_name: joi.string().min(3).max(50).required().messages({
    "any.required": "el nombre es requerido",
    "string.empty": "el nombre no puede ser una cadena de texto vacía",
    "string.base": "el enombre debe ser de tipo cadena de texto",
    "string.min": "el nombre tiene que tener minimo 3 letras",
    "string.max": "el nombre tiene que tener maximo 50 letras",
  }),
  last_name: joi.string(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .min(3)
    .max(50)
    .required()
    .messages({
      "any.required": "el email es requerido",
      "string.empty": "el email no puede ser una cadena de texto vacía",
      "string.email": "el email debe ser válido",
      "string.min": "el email tiene que tener minimo 3 letras",
      "string.max": "el email tiene que tener maximo 50 letras",
    }),
  password: joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$')).min(3).max(50).required().messages({
    "any.required": "la contraseña es requerido",
    "string.empty": "la contraseña no puede ser una cadena de texto vacía",
    "string.pattern.base": "la contraseña debe ser alfanumerica con min/MAY",
    "string.min": "la contraseña tiene que tener minimo 3 letras",
    "string.max": "la contraseña tiene que tener maximo 50 letras",
  }),
  avatar: joi.string().uri(),
  role: joi.string(),
  verify: joi.boolean(),
  verifyCode: joi.string(),
});

export default usersSchema;
