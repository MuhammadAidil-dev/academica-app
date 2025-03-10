const Joi = require('joi');

const createCategorySchema = Joi.object({
  name: Joi.string().min(3).trim().required().messages({
    'string.base': 'input name harus berupa string',
    'string.min': 'input name minimal memiliki 3 karakter',
    'string.empty': 'input name tidak boleh kosong',
    'any.required': 'input name tidak boleh kosong ',
  }),
});

const searchCategorySchema = Joi.object({
  name: Joi.string().trim().messages({
    'string.base': 'Query name harus berupa string',
    'string.empty': 'Query name tidak boleh kosong',
  }),
});

const idCategoryParamsSchema = Joi.object({
  id_category: Joi.number().integer().required().messages({
    'number.base': 'id harus berupa number',
    'any.required': 'id tidak wajib diisi',
  }),
});

module.exports = {
  createCategorySchema,
  searchCategorySchema,
  idCategoryParamsSchema,
};
