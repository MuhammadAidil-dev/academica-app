const { Op } = require('sequelize');
const { Category } = require('../models/association');

const EnsureCategoriesExist = async (req, res, next) => {
  try {
    const { categories = [] } = req.body;

    if (categories.length > 0) {
      await Category.bulkCreate(
        categories.map((category) => ({
          name: category,
        })),
        {
          ignoreDuplicates: true,
          validate: true,
        }
      );

      req.body.categories = (
        await Category.findAll({
          attributes: ['id_category'],
          where: {
            name: {
              [Op.in]: categories,
            },
          },
        })
      ).map((category) => category.id_category);
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = EnsureCategoriesExist;
