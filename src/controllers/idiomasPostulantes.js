const models = require("../../database/models");

export const getAll = async (req, res) => {
  try {
    const idiomas_postulantes = await models.idiomas_postulantes.findAll({
      attributes: ["id", "fk_id_idioma", "fk_id_postulante", "fk_id_nivel"],
      include: [
        {
          as: "Postulante",
          model: models.postulantes,
          attributes: ["id", "nombre", "apellido", "fk_id_usuario", "telefono"],
          include: [
            {
              as: "Usuario",
              model: models.usuarios,
              attributes: ["id", "usuario", "estado"],
            },
          ],
        },
      ],
    });

    res.send({
      idiomas_postulantes,
    });
  } catch (error) {
    console.error("Error en la consulta:", error);
    res.status(500).send("Error interno en el servidor");
  }
};



export const postIdiomasPostulantes = async (req, res) => {
  models.idiomas_postulantes
    .create({
      fk_id_idioma: req.body.idIdioma,     
      fk_id_postulante: req.body.idPostulante,          
      fk_id_nivel: req.body.idNivel,         
    })
    .then(
      (idiomas_postulantes) => res.status(201).send({ id: idiomas_postulantes.id }))

    .catch((error) => {
      if (error == "SequelizeUniqueConstraintError: Validation error") {
        res.status(401).send("Bad request: Algun tipo de error de validacion de campos");
      } else {
        console.log(`Error al intentar insertar en la base de datos: ${error}`);
        res.sendStatus(500);
      }
    });
};

const findPorId = async (fk_id_postulante, { onSuccess, onNotFound, onError }) => {
  try {
    const idiomas_postulantes = await models.idiomas_postulantes.findOne({
      include: [
        {
          as: "Idioma",
          model: models.idiomas,
          attributes: ["id", "nombre_idioma"],
        },
        {
          as: "Postulante",
          model: models.postulantes,
          attributes: ["id", "fk_id_usuario"],
        },
        {
          as: "Nivel",
          model: models.niveles_idiomas,
          attributes: ["id", "nivel"],
        },
      ],
      where: { fk_id_postulante },
    });

    if (idiomas_postulantes) {
      onSuccess(idiomas_postulantes);
    } else {
      onNotFound();
    }
  } catch (error) {
    console.error("Error in findPorId:", error);
    onError();
  }
};

export const getPorIdPostulante = async (req, res) => {
  const { id: idPostulante } = req.params;

  findPorId(idPostulante, {
    onSuccess: (idiomas_postulantes) => res.send(idiomas_postulantes),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(400),
  });
};

