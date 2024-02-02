import express  from "express";
import routes from './routes';
import cors from "cors";
import {checkBucketConnection, checkDatabaseConnection, checkListBucketConnection} from "./services/supabase.service";
const { sequelize } = require('../database/models');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(app.get('port'), async () => {
    console.log('Servidor conectado al puerto', app.get('port'), '🚀🚀🚀'),
        sequelize.authenticate();

    // Verifica la conexión a la base de datos de Supabase
    await checkDatabaseConnection().catch(error => {
        console.error('Error al verificar la conexión a la base de datos:', error);
    });
    checkListBucketConnection()
});

 module.exports = app;