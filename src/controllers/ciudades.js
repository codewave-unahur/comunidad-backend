const models = require("../../database/models");

// Obtener todas las ciudades
export const getAll = async (req, res) => {
  try {
    const ciudades = await models.ciudades.findAll({
      attributes: ["id", "nombre", "fk_id_provincia"],
    });
    res.send({ ciudades });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};






