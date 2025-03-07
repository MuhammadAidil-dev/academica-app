const Thread = require('./thread/Thread');
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

module.exports = { User, Thread };
