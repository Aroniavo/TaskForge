const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/database');
const UserProfile = require('./UserModel');

const DailyQuote = sequelize.define('DailyQuote', {
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
  quote_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  quote: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING(255),
    allowNull: true,
  }
}, {
  tableName: 'daily_quotes',
  timestamps: false,
  underscored: true,
});

UserProfile.hasMany(DailyQuote, { foreignKey: 'user_id', sourceKey: 'user_id' });
DailyQuote.belongsTo(UserProfile, { foreignKey: 'user_id', targetKey: 'user_id' });

module.exports = DailyQuote;