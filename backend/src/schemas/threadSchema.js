const Joi = require('joi');

const createThreadSchema = Joi.object({
  title: Joi.string().trim().required().messages({
    'string.empty': 'Field title tidak boleh kosong',
    'any.required': 'Field title wajib diisi',
  }),
  content: Joi.string().trim().required().messages({
    'string.empty': 'Field content tidak boleh kosong',
    'any.required': 'Field content wajib diisi',
  }),
  attachment: Joi.string().optional().allow(null, ''),
  status: Joi.string()
    .valid('active', 'hidden', 'deleted')
    .default('active')
    .messages({
      'any.only': "Value yang valid hanya 'active', 'hidden', 'deleted'",
    }),
  likes_thread: Joi.number().integer().default(0).messages({
    'number.base': 'likes harus bertipe integer',
  }),
});

const updatedThreadSchema = Joi.object({
  title: Joi.string().trim().messages({
    'string.base': 'Title harus berupa string',
  }),
  content: Joi.string().trim().messages({
    'string.base': 'Content harus berupa string',
  }),
  attachment: Joi.string().messages({
    'string.base': 'Attachment harus berupa string',
  }),
  status: Joi.string().valid('active', 'hidden', 'deleted').messages({
    'string.base': 'Status harus berupa string',
    'any.only': "Value yang valid hanya 'active', 'hidden', 'deleted'",
  }),
  likes_thread: Joi.number().integer().messages({
    'number.base': 'likes harus bertipe integer',
  }),
});

const idThreadParamSchema = Joi.object({
  id_thread: Joi.number().integer().required().messages({
    'number.base': 'id harus berupa integer',
    'any.required': 'id harus disertakan',
  }),
});

const paginationSchema = Joi.object({
  page: Joi.number().integer().min(1).default(1).messages({
    'number.base': 'page harus berupa integer',
    'number.integer': 'page harus berupa bilangan bulat',
    'number.min': 'page minimal bernilai 1',
  }),
});

module.exports = {
  createThreadSchema,
  updatedThreadSchema,
  idThreadParamSchema,
  paginationSchema,
};
