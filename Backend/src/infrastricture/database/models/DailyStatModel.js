const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/database');
const UserProfile = require('./UserModel');

const DailyStat = sequelize.define('DailyStat', {
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
  stat_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  tasks_created: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  tasks_completed: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  goals_set: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  goals_completed: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  completion_rate: {
    type: DataTypes.DECIMAL(5, 2),
    defaultValue: 0,
  }
}, {
  tableName: 'daily_stats',
  timestamps: false,
  underscored: true,
});

UserProfile.hasMany(DailyStat, { foreignKey: 'user_id', sourceKey: 'user_id' });
DailyStat.belongsTo(UserProfile, { foreignKey: 'user_id', targetKey: 'user_id' });

module.exports = DailyStat;