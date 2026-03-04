const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
const path = require("path");

// Charger les variables d'environnement selon NODE_ENV
const envPath = process.env.NODE_ENV === 'production' 
    ? path.join(__dirname, '../../.env.production') 
    : path.join(__dirname, '../../.env');

const result = dotenv.config({ path: envPath });

if (result.error) {
    console.warn(`⚠️ Attention : Impossible de charger le fichier env à : ${envPath}`);
}

console.log(
  `--- Vérification de la connexion (${process.env.NODE_ENV || "development"}) ---`,
);
console.log(`Fichier utilisé : ${envPath}`);

if (!process.env.DB_HOST || !process.env.DB_NAME) {
    console.error('❌ Erreur : Les variables d\'environnement (DB_HOST, DB_NAME, etc.) ne sont pas chargées.');
    console.error('Vérifiez que le fichier .env existe à la racine.');
    process.exit(1);
}

console.log(`Host: ${process.env.DB_HOST}`);
console.log(`Port: ${process.env.DB_PORT || 5432}`);
console.log(`Database: ${process.env.DB_NAME}`);
console.log(`User: ${process.env.DB_USER}`);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Nécessaire pour Supabase
        }
    }
  },
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion établie avec succès.");

    // Optionnel : Afficher l'heure du serveur DB pour confirmer la connexion
    const [results] = await sequelize.query("SELECT NOW()");
    console.log("Heure du serveur DB:", results[0].now);
  } catch (error) {
    console.error("❌ Impossible de se connecter à la base de données :");
    console.error(error.message);
  } finally {
    await sequelize.close();
  }
}

testConnection();
