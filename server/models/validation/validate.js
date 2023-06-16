const Joi = require('joi');

const validateUser = data => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().email().min(3).max(255).required(),
    password: Joi.string().min(8).max(255).required()
  });
  return schema.validate(data);
}
module.exports = validateUser;