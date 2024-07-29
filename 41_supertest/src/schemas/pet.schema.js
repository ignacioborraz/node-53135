import joi from "joi-oid";

const validSchema = joi.object({
  name: joi.string().min(3).max(100).required().messages({
    "any.required": "NAME_REQUIRED",
    "string.empty": "NAME_REQUIRED",
    "string.min": "NAME_TOO_SHORT",
    "string.max": "NAME_TOO_LARGE",
  }),
  specie: joi.string().min(3).max(100).required(),
  birthDate: joi.date(),
  adopted: joi.boolean(),
  owner: joi.objectId(),
  image: joi.string().uri(),
});

export default validSchema;
