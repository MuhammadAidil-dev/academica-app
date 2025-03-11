const Category = require('./category/Category');
const Thread = require('./thread/Thread');
const ThreadCategories = require('./threadCategories/ThreadCategories');
const User = require('./user/User');

// One-to-Many: User -> Thread
User.hasMany(Thread, {
  foreignKey: {
    name: 'id_user',
    allowNull: false,
  },
  as: 'threads',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

Thread.belongsTo(User, {
  foreignKey: {
    name: 'id_user',
    allowNull: false,
  },
  as: 'author',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
});

// many-to-many: Thread - Category -> ThreadCategories
Thread.belongsToMany(Category, {
  through: ThreadCategories,
  foreignKey: 'id_thread',
  otherKey: 'id_category',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
  as: 'categories',
});

Category.belongsToMany(Thread, {
  through: ThreadCategories,
  foreignKey: 'id_category',
  otherKey: 'id_thread',
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
  as: 'threads',
});

module.exports = { User, Thread, Category, ThreadCategories };
