# Development stage
FROM node:18 as development
WORKDIR /comunidad-backend-v3

# Copia el archivo package.json
COPY package*.json ./
RUN npm install

# Copia la carpeta de código fuente
COPY ./src ./src
COPY ./database ./database
COPY .sequelizerc .sequelizerc
COPY .babelrc .babelrc

# Define el comando para iniciar la aplicación en modo desarrollo
CMD [ "npm", "run", "dev" ]
