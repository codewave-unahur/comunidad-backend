import express  from "express";
import routes from './routes';
import cors from "cors";
const { sequelize } = require('../database/models');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'API Empleabilidad',
            version: '1.0.0',
            description: 'API Empleabilidad',
        },
        servers: [
            {
                url: 'http://localhost:3000/',
            },
        ],
    },
    apis: ['./src/routes/*.js'],
};

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(cors());
app.use('/', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(options)));

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError' || err.name === 'InvalidTokenError'){
        return res.status(401).json({ error: 'Acceso no autorizado', message: err.message });
    }
    next(err);
});


app.listen(app.get('port'), () => {
    console.log('Servidor conectado al puerto', app.get('port'))
        sequelize.authenticate();
});

module.exports = app;