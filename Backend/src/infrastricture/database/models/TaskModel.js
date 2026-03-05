const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/database');
const UserProfile = require('./UserModel');

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.STRING(255),
    allowNull: false,
    references: {
      model: UserProfile,
      key: 'user_id',
    },
    onDelete: 'CASCADE',
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  category: {
    type: DataTypes.ENUM('study', 'coding', 'personal', 'work'),
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  task_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'tasks',
  timestamps: false,
  underscored: true,
});

// Associations
UserProfile.hasMany(Task, { foreignKey: 'user_id', sourceKey: 'user_id' });
Task.belongsTo(UserProfile, { foreignKey: 'user_id', targetKey: 'user_id' });

module.exports = Task;