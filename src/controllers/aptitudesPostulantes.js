const models = require("../../database/models");


export const createAptitudPostulante = async (req, res) => {
    models.aptitudes_postulantes
      .create({
        fk_id_aptitud: req.body.idAptitud,     
        fk_id_usuario: req.body.idUsuario,      
      })
      .then(
        (aptitudes_postulantes) => res.status(201).send({ id: aptitudes_postulantes.id }))
  
      .catch((error) => {
        if (error == "SequelizeUniqueConstraintError: Validation error") {
          res.status(401).send("Bad request: Algun tipo de error de validacion de campos");
        } else {
          console.log(`Error al intentar insertar en la base de datos: ${error}`);
          res.sendStatus(500);
        }
      });
};


export const getAll = async (req, res) => {
    try {
      const aptitudes_postulantes = await models.aptitudes_postulantes.findAll({
        attributes: ["id", "fk_id_aptitud", "fk_id_usuario"],
        include: [
            {
                model: models.postulantes,
                as: "Postulante",
                attributes: ["id","nombre","apellido","nacionalidad","fecha_nac","pais","fk_id_provincia","fk_id_ciudad",
                "calle","nro","piso","depto","cp","telefono","cant_materias","alumno_unahur","presentacion","cv","foto",
                "fk_id_usuario","fk_id_estudios","fk_id_carrera","fk_id_estado","fk_id_tipo_documento"],
                include:[
                    {
                        model: models.usuarios,
                        as: "Usuario",  
                        attributes: ["id","usuario","password","estado","fk_id_grupo"],
                    }
                ,]
            },
            {
                as: "Aptitud",
                model: models.aptitudes,
                attributes: ["id", "nombre_aptitud", "descripcion"],
            },
          
        ],
      });
      res.send({ aptitudes_postulantes });
    } catch (error) {
      console.error("Error al buscar aptitudes_postulantes:", error);
      res.status(500).send("Error interno del servidor");
    }
};


const findAptitudesPorIdUsuario = (fk_id_usuario, { onSuccess, onNotFound, onError }) => {
  models.aptitudes_postulantes
    .findOne({
      include: [
        {
            model: models.postulantes,
            as: "Postulante",
            attributes: ["id","nombre","apellido","nacionalidad","fecha_nac","pais","fk_id_provincia","fk_id_ciudad",
            "calle","nro","piso","depto","cp","telefono","cant_materias","alumno_unahur","presentacion","cv","foto",
            "fk_id_usuario","fk_id_estudios","fk_id_carrera","fk_id_estado","fk_id_tipo_documento"],
            include:[
                {
                    model: models.usuarios,
                    as: "Usuario",  
                    attributes: ["id","usuario","password","estado","fk_id_grupo"],
                }
            ,]
        },
        {
            as: "Aptitud",
            model: models.aptitudes,
            attributes: ["id", "nombre_aptitud", "descripcion"],
        },
      
    ],
      where: { fk_id_usuario },
    })
    .then((empresas) => (empresas ? onSuccess(empresas) : onNotFound()))
    .catch(() => onError());
};

export const getIdUsuario = async (req, res) => {
  findAptitudesPorIdUsuario(req.params.id, {
    onSuccess: (aptitudes) => res.send(aptitudes),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
};