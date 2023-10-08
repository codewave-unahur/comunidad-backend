const models = require("../../database/models");

export const getAll = async (req, res) => {

  models.niveles_idiomas
    .findAll({
        attributes: ["id","nivel"]
    }).then(nivele_idioma => res.send({
      nivele_idioma
      
    })).catch(() => res.sendStatus(500));
};

export const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const nivelIdioma = await models.niveles_idiomas.findOne({
      where: { id },
      attributes: ["id", "nivel"],
    });

    if (nivelIdioma) {
      res.send({ nivelIdioma });
    } else {
      res.status(404).send("Not Found");
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};