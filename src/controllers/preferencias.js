const models = require("../../database/models");
const { Op } = require("sequelize");
export const getAll = async (req, res) => {
    try {
      const preferencias = await models.preferencias.findAll({
        attributes: ["id", "nombre_preferencia"]
      });
      
      res.send({ preferencias });
    } catch (error) {
      console.error("Error al buscar aptitudes:", error);
      res.status(500).send("Error interno del servidor");
    }
};