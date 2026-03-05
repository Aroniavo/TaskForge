const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/database');

const UserProfile = sequelize.define('UserProfile', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  current_streak: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  longest_streak: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  total_tasks_completed: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  last_active_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  badges: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    defaultValue: [],
  },
  theme: {
    type: DataTypes.STRING(20),
    defaultValue: 'light',
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'user_profiles',
  timestamps: false,          // on gère created_at manuellement
  underscored: true,          // utilise les noms de colonnes snake_case
});

module.exports = UserProfile;