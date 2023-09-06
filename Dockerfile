# Development stage
FROM node:16 as development
WORKDIR /comunidad-backend-v3/src/app.js
COPY package*.json tsconfig.json ./
RUN npm install
COPY ./src ./src
CMD [ "npm", "run", "start" ]
