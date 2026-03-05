const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/database');
const UserProfile = require('./UserModel');

const DailyGoal = sequelize.define('DailyGoal', {
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
  goal_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  goals: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'daily_goals',
  timestamps: false,
  underscored: true,
});

UserProfile.hasMany(DailyGoal, { foreignKey: 'user_id', sourceKey: 'user_id' });
DailyGoal.belongsTo(UserProfile, { foreignKey: 'user_id', targetKey: 'user_id' });

module.exports = DailyGoal;