# =========================
# Stage 1: Development
# =========================
FROM node:20-alpine AS dev

WORKDIR /app

# Copier package.json + package-lock.json
COPY package*.json ./

# Installer toutes les dépendances (dev + prod)
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port pour dev
EXPOSE 5000

# Lancer nodemon en dev
CMD ["npm", "run", "dev"]

# =========================
# Stage 2: Production
# =========================
FROM node:20-alpine AS prod

WORKDIR /app

# Copier package.json seulement
COPY package*.json ./

# Installer uniquement prod dependencies
RUN npm install --only=production

# Copier le code depuis stage dev
COPY --from=dev /app .

# Exposer le port pour prod
EXPOSE 5000

# Lancer l’app en prod
CMD ["npm", "start"]