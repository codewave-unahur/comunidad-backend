// En el archivo models/documentos_postulantes.js

"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class cv_postulantes extends Model {
        static associate(models) {
            cv_postulantes.belongsTo(models.postulantes, {
                foreignKey: "fk_id_postulante",
                as: "Postulante",
            });
        }
    }
    cv_postulantes.init(
        {
            tipo_documento: DataTypes.STRING,
            contenido: DataTypes.TEXT,
            fk_id_postulante: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "cv_postulantes",
        }
    );
    return cv_postulantes;
};
