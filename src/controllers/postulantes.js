const models = require("../../database/models");
const { Op } = require("sequelize");

export const getConFiltros = async (req, res) => {
  const paginaComoNumero = Number.parseInt(req.query.pagina);
  const limiteComoNumero = Number.parseInt(req.query.limite);
  let ordenarPor = req.query.ordenar;
  let buscarApellido = req.query.buscarApellido;
  let buscarNombre = req.query.buscarNombre;
  //let buscarDNI = req.query.buscarDNI;

  let pagina = 0;
  if (!Number.isNaN(paginaComoNumero) && paginaComoNumero > 0) {
    pagina = paginaComoNumero;
  }

  let limite = 30;
  if (!Number.isNaN(limiteComoNumero) && limiteComoNumero > 0) {
    limite = limiteComoNumero;
  }

  if (typeof ordenarPor === "undefined") {
    ordenarPor = "createdAt";
  }
/*
  if (typeof buscarDNI === "undefined") {
    buscarDNI = "";
  }
*/
  if (typeof buscarNombre === "undefined") {
    buscarNombre = "";
  }

  if (typeof buscarApellido === "undefined") {
    buscarApellido = "";
  }

  models.postulantes
    .findAndCountAll({
      limit: limite,
      offset: pagina * limite,
      include: [
        {
          as: "Tipo_documento",
          model: models.tipos_documentos,
          attributes: ["id", "tipo_documento"],
        },
        {
          as: "Usuario",
          model: models.usuarios,
          attributes: ["id", "usuario", "estado", "createdAt"],
        },
        {
          as: "Estudios",
          model: models.estudios,
          attributes: ["id", "nombre_estudio", "estado_estudio"],
        },
        {
          as: "Carrera",
          model: models.carreras,
          attributes: ["id", "nombre_carrera"],
        },
        {
          as: "Estado",
          model: models.estado_postulantes,
          attributes: ["id", "nombre_estado"],
        },
      ],
      where: {
        [Op.and]: [
          {
            nombre: {
              [Op.iLike]: `%${buscarNombre}%`,
            },
          },
          {
            apellido: {
              [Op.iLike]: `%${buscarApellido}%`,
            },
          },
        ],
      },
      order: [ordenarPor],
    })
    .then((postulantes) =>
      res.send({
        postulantes,
        totalPaginas: Math.ceil(postulantes.count / limite),
      })
    )
    .catch(() => res.sendStatus(400));
};

const findPostulantesPorIdUsuario = (
  fk_id_usuario,
  { onSuccess, onNotFound, onError }
) => {
  models.postulantes
    .findOne({
      include: [
        {
          as: "Tipo_documento",
          model: models.tipos_documentos,
          attributes: ["id", "tipo_documento"],
        },
        {
          as: "Usuario",
          model: models.usuarios,
          attributes: ["id", "usuario", "estado", "createdAt"],
        },
        {
          as: "Estudios",
          model: models.estudios,
          attributes: ["id", "nombre_estudio", "estado_estudio"],
        },
        {
          as: "Carrera",
          model: models.carreras,
          attributes: ["id", "nombre_carrera"],
        },
        {
          as: "Estado",
          model: models.estado_postulantes,
          attributes: ["id", "nombre_estado"],
        },
      ],

      where: { fk_id_usuario },
    })
    .then((postulantes) =>
      postulantes ? onSuccess(postulantes) : onNotFound()
    )
    .catch(() => onError());
};

export const getPorIdUsuario = async (req, res) => {
  findPostulantesPorIdUsuario(req.params.id, {
    onSuccess: (postulantes) => res.send(postulantes),
    onNotFound: () => res.sendStatus(401),
    onError: () => res.sendStatus(400),
  });
};

const findPostulantesPorDNI = (
  id,
  { onSuccess, onNotFound, onError }
) => {
  models.postulantes
    .findOne({
      include: [
        {
          as: "Tipo_documento",
          model: models.tipos_documentos,
          attributes: ["id", "tipo_documento"],
        },
        {
          as: "Usuario",
          model: models.usuarios,
          attributes: ["id", "usuario", "estado", "createdAt"],
        },
        {
          as: "Estudios",
          model: models.estudios,
          attributes: ["id", "nombre_estudio", "estado_estudio"],
        },
        {
          as: "Carrera",
          model: models.carreras,
          attributes: ["id", "nombre_carrera"],
        },
        {
          as: "Estado",
          model: models.estado_postulantes,
          attributes: ["id", "nombre_estado"],
        },
      ],

      where: { id },
    })
    .then((postulantes) =>
      postulantes ? onSuccess(postulantes) : onNotFound()
    )
    .catch(() => onError());
};

export const getPorId = async (req, res) => {
  findPostulantesPorDNI(req.params.id, {
    onSuccess: (postulantes) => res.send(postulantes),
    onNotFound: () => res.sendStatus(401),
    onError: () => res.sendStatus(400),
  });
};

export const postPostulante = async (req, res) => {
  models.postulantes
    .create({
      id: req.body.documento,
      fk_id_tipo_documento: req.body.tipoDocumento,
      fk_id_usuario: req.body.idUsuario,
      fk_id_estudios: req.body.estudios,
      fk_id_carrera: req.body.carrera,
      fk_id_estado: req.body.estado,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      nacionalidad: req.body.nacionalidad,
      fecha_nac: req.body.fecha_nac,
      pais: req.body.pais,
      provincia: req.body.provincia,
      ciudad: req.body.ciudad,
      calle: req.body.calle,
      nro: req.body.nro,
      piso: req.body.piso,
      depto: req.body.depto,
      cp: req.body.cp,
      telefono: req.body.telefono,
      cant_materias: req.body.cantMaterias,
      alumno_unahur: req.body.alumnoUnahur,
      presentacion: req.body.presentacion,
      cv: "path del cv",
      foto: "path de la foto",
    })
    .then(
      (postulantes) => res.status(201).send({ id: postulantes.id }),
      //aca habilitamos el usuario
      enableUser(req.body.idUsuario)
    )
    .catch((error) => {
      if (error == "SequelizeUniqueConstraintError: Validation error") {
        res.status(401).send("Bad request: este dni ya se dio de alta");
      } else {
        console.log(`Error al intentar insertar en la base de datos: ${error}`);
        res.sendStatus(500);
      }
    });
};

//Con esto habilitamos el usuario cuando de el alta en postulantes
const enableUser = (id_usuario) => {
  models.usuarios.update(
    { estado: "t" },
    {
      where: {
        id: id_usuario,
      },
    }
  );
};
