const models = require("../../database/models");

export const getAll = async (req, res) => {

  models.niveles_idiomas
    .findAll({
        attributes: ["id","nivel"]
    }).then(nivele_idioma => res.send({
      nivele_idioma
      
    })).catch(() => res.sendStatus(500));
};