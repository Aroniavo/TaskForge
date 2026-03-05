const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
const envPath = process.env.NODE_ENV === 'production' 
    ? path.join(__dirname, '../../.env.production') 
    : path.join(__dirname, '../../.env');
dotenv.config({ path: envPath });

// Database Connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        },
        family: 4 // Force IPv4
    }
});

module.exports = { sequelize, dotenv, path };    