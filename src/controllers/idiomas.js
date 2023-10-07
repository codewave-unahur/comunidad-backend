const models = require("../../database/models");

export const getAll = async (req, res) => {

  models.idiomas
    .findAll({
        attributes: ["id","nombre_idioma","nivel"]
    }).then(idioma => res.send({
      idioma
      
    })).catch(() => res.sendStatus(500));
};