const models = require("../../database/models");
const { Op } = require("sequelize");

export const getConFiltros = async (req, res) => {
  try {
    let nombreCiudad = req.query.nombreCiudad || "_";
    nombreCiudad = nombreCiudad.replace(/\s/g, "%");

    const idProvincia = req.query.idProvincia;

    const ciudades = await models.ciudades.findAll({
      attributes: ["id", "nombre"],
      where: {
        nombre: {
          [Op.iLike]: `%${nombreCiudad}%`,
        },
        fk_id_provincia: {
          [Op.eq]: idProvincia,
        },
      },
      order: ["nombre"],
    });

    res.status(200).send(ciudades);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
