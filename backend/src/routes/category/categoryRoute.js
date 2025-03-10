const express = require('express');
const CategoryController = require('../../controllers/category/categoryController');
const {
  validateRequest,
  validateQuery,
  validateParams,
} = require('../../middleware/validationMiddleware');
const {
  createCategorySchema,
  searchCategorySchema,
  idCategoryParamsSchema,
} = require('../../schemas/categorySchema');
const route = express.Router();

// prefix -> /category

route.post(
  '/',
  validateRequest(createCategorySchema),
  CategoryController.createCategory
);
// get category and get by query string 'name'
route.get(
  '/search',
  validateQuery(searchCategorySchema),
  CategoryController.getCategories
);

route.put(
  '/:id_category',
  validateParams(idCategoryParamsSchema),
  validateRequest(createCategorySchema),
  CategoryController.updateCategory
);

route.delete(
  '/:id_category',
  validateParams(idCategoryParamsSchema),
  CategoryController.deleteCategory
);

module.exports = route;
