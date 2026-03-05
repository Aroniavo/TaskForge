// CI/CD Test: Verifying Auto-Merge fix
const express = require('express');
const cors = require('cors');
const { sequelize, dotenv, path } = require('./config/database');

// Import all models (registers them with sequelize and sets up associations)
const { UserProfile, Task, DailyQuote, DailyGoal, DailyStat } = require('./infrastricture/database/models');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Load environment variables
const envPath = process.env.NODE_ENV === 'production' 
    ? path.join(__dirname, '../../.env.production') 
    : path.join(__dirname, '../../.env');
dotenv.config({ path: envPath });

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('TaskForge Backend API is running...');
});

app.get('/health', async (req, res) => {
    try {
        await sequelize.authenticate();
        res.json({ status: 'OK', database: 'Connected' });
    } catch (error) {
        res.status(500).json({ status: 'Error', database: error.message });
    }
});

// CI/CD Test: Verifying Auto-Merge fix
app.get('/test', (req, res) => {
    res.send('TaskForge Backend API is running...');
});

// Sync all models with the database, then start the server
sequelize.sync({ alter: true })
    .then(() => {
        console.log('✅ All tables synchronized successfully!');
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
            console.log(`📡 Connected to Supabase at ${process.env.DB_HOST}`);
        });
    })
    .catch((error) => {
        console.error('❌ Failed to sync database:', error.message);
        process.exit(1);
    });

