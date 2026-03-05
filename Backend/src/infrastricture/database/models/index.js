const { sequelize } = require('../../../config/database');

// Import all models (this registers them with sequelize and sets up associations)
const UserProfile = require('./UserModel');
const Task = require('./TaskModel');
const DailyQuote = require('./DailyQuoteModel');
const DailyGoal = require('./DailyGoalModel');
const DailyStat = require('./DailyStatModel');

module.exports = {
  sequelize,
  UserProfile,
  Task,
  DailyQuote,
  DailyGoal,
  DailyStat,
};
