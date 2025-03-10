const { Op } = require('sequelize');
const { NotFoundError } = require('../../middleware/error/errorTypes');
const Category = require('../../models/category/Category');
const { handleSequelizeError } = require('../../utils/util');

// note -> handle sequelize error hanya menangani sequelize validation

const CategoryController = {
  createCategory: async (req, res, next) => {
    try {
      const { name } = req.body;

      const existCategory = await Category.findOne({
        where: {
          name,
        },
      });

      // jika sudah ada, kirim pesan
      if (existCategory) {
        return res.status(400).json({
          status: 'error',
          message: 'Kategori sudah ada',
        });
      }

      const category = await Category.create({ name });

      return res.status(201).json({
        status: 'success',
        message: 'Berhasil menambahkan kategori',
        data: category,
      });
    } catch (error) {
      if (error.name && error.name.startsWith('Sequelize')) {
        return next(handleSequelizeError(error));
      }
      return next(error);
    }
  },
  getCategories: async (req, res, next) => {
    try {
      const { name } = req.query;
      let categories = [];

      if (!name) {
        categories = await Category.findAll({
          attributes: ['id_category', 'name'],
          order: [['id_category', 'ASC']],
        });
      } else {
        categories = await Category.findAll({
          where: {
            name: {
              [Op.like]: `%${name.trim()}%`,
            },
          },
          attributes: ['id_category', 'name'],
          order: [['id_category', 'ASC']],
        });
      }

      return res.status(200).json({
        status: 'success',
        message:
          categories.length > 0
            ? 'Berhasil mengambil kategori'
            : 'Tidak ada kategori yang ditemukan',
        data: categories,
      });
    } catch (error) {
      if (error.name && error.name.startsWith('Sequelize')) {
        return next(handleSequelizeError(error));
      }
      return next(error);
    }
  },
  updateCategory: async (req, res, next) => {
    try {
      const { id_category } = req.params;
      const { name } = req.body;

      const category = await Category.findByPk(id_category);

      if (!category) {
        throw new NotFoundError('Kategori tidak ditemukan');
      }

      const existCategory = await Category.findOne({
        where: { name, id_category: { [Op.ne]: id_category } },
      });

      if (existCategory) {
        return res.status(400).json({
          status: 'error',
          message: `Kategori dengan nama ${name} sudah ada`,
        });
      }

      const updatedCategory = await category.update({
        name,
      });

      return res.status(200).json({
        status: 'success',
        message: 'Berhasil update kategori',
        data: updatedCategory,
      });
    } catch (error) {
      if (error.name && error.name.startsWith('Sequelize')) {
        return next(handleSequelizeError(error));
      }
      return next(error);
    }
  },
  deleteCategory: async (req, res, next) => {
    try {
      const { id_category } = req.params;

      const category = await Category.findByPk(id_category);

      if (!category) {
        throw new NotFoundError('Kategori tidak ditemukan');
      }

      await category.destroy();

      return res.status(200).json({
        status: 'success',
        message: 'Berhasil menghapus kategori',
      });
    } catch (error) {
      if (error.name && error.name.startsWith('Sequelize')) {
        return next(handleSequelizeError(error));
      }
      return next(error);
    }
  },
};

module.exports = CategoryController;
