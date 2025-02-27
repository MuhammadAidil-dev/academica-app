const Joi = require('joi');
const createUserSchema = Joi.object({
  fullname: Joi.string().required().messages({
    'string.base': 'Fullname harus berupa string',
    'string.empty': 'Fullname tidak boleh kosong',
    'any.required': 'Fullname harus di isi',
  }),
  username: Joi.string().alphanum().min(3).required().messages({
    'string.base': 'Username harus berupa karakter a-z, A-z, 0-9',
    'string.empty': 'Username tidak boleh kosong',
    'string.min': 'Username minimal 3 karakter',
    'any.required': 'Username harus di isi',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Format email tidak valid',
    'any.required': 'Email wajib diisi',
  }),
  password: Joi.string().min(8).required().messages({
    'string.min': 'Password minimal 8 karakter',
    'any.required': 'Password wajib diisi',
  }),
  role: Joi.string()
    .valid('admin', 'mahasiswa', 'dosen')
    .default('mahasiswa')
    .messages({
      'any.only': "role yang valid hanya 'admin', 'mahasiswa', 'dosen'",
    }),
});

module.exports = { createUserSchema };
