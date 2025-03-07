const express = require('express');
const threadController = require('../../controllers/thread/threadController');
const {
  validateRequest,
  validateParams,
  validateQuery,
} = require('../../middleware/validationMiddleware');
const {
  createThreadSchema,
  updatedThreadSchema,
  idThreadParamSchema,
  paginationSchema,
} = require('../../schemas/threadSchema');

const route = express.Router();

// create thread
route.post(
  '/',
  validateRequest(createThreadSchema),
  threadController.createThread
);

// get thread
route.get('/', validateQuery(paginationSchema), threadController.getAllThreads);
route.get(
  '/:id_thread',
  validateParams(idThreadParamSchema),
  threadController.getThreadById
);
route.get(
  '/user/:id_user',
  validateQuery(paginationSchema),
  threadController.getThreadsByUser
);

// update thread
route.put(
  '/:id_thread',
  validateParams(idThreadParamSchema),
  validateRequest(updatedThreadSchema),
  threadController.updateThread
);

// delete thread
route.delete(
  '/:id_thread',
  validateParams(idThreadParamSchema),
  threadController.deletedThread
);

module.exports = route;
