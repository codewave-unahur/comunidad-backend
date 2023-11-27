const models = require("../../database/models");
const { Op: sequelize } = require("sequelize");

export const getPorIdPostulante = async (req, res) => {
  const paginaComoNumero = Number.parseInt(req.query.pagina);
  const limiteComoNumero = Number.parseInt(req.query.limite);
  const idPostulante = req.params.id;
  let nombre_postulacion = req.query.nombreDeOferta;

  let pagina = 0;
  if (!Number.isNaN(paginaComoNumero) && paginaComoNumero > 0) {
    pagina = paginaComoNumero;
  };

  let limite = 30;
  if (!Number.isNaN(limiteComoNumero) && limiteComoNumero > 0) {
    limite = limiteComoNumero;
  };

  if (typeof nombre_postulacion === "undefined") {
    nombre_postulacion = "_";
  } else {
    nombre_postulacion = nombre_postulacion.replace(/\s/g, "%");
  };
    
  models.postulaciones
    .findAndCountAll({
      limit: limite,
      offset: pagina * limite,
      include: [
        {
          as: "Postulante",
          model: models.postulantes,
          attributes: ["id", "nombre", "apellido", "fk_id_usuario", "telefono"],
        },
        {
          as: "Oferta",
          model: models.ofertas,
          attributes: ["id", "titulo_oferta"],
        },
        {
          as: "Empresa",
          model: models.empresas,
          attributes: ["id", "nombre_empresa"],
        },
      ],

      where: {
        [sequelize.and]: [
          { fk_id_postulante: idPostulante },
          {
            '$Oferta.titulo_oferta$': {
              [sequelize.iLike]: `%${nombre_postulacion}%`,
            },
          },
        ],
      }, 
    })
    .then((postulaciones) => {
      res.send({
        postulaciones,
        totalPaginas: Math.ceil(postulaciones.count / limite),
      });
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
    
};

export const getPorIdOferta = async (req, res) => {
  const paginaComoNumero = Number.parseInt(req.query.pagina);
  const limiteComoNumero = Number.parseInt(req.query.limite);
  const idOferta = req.params.id;

  let pagina = 0;
  if (!Number.isNaN(paginaComoNumero) && paginaComoNumero > 0) {
    pagina = paginaComoNumero;
  }

  let limite = 30;
  if (!Number.isNaN(limiteComoNumero) && limiteComoNumero > 0) {
    limite = limiteComoNumero;
  }
 
  models.postulaciones
    .findAndCountAll({
      limit: limite,
      offset: pagina * limite,
      include: [
        {
          as: "Postulante",
          model: models.postulantes,
          attributes: ["id", "nombre", "apellido","fk_id_usuario","telefono","foto","cv"],
        },
        {
          as: "Oferta",
          model: models.ofertas,
          attributes: ["id", "titulo_oferta"],
        },        
        {
          as: "Empresa",
          model: models.empresas,
          attributes: ["id", "nombre_empresa"],
        },
      ],
      where: { fk_id_oferta: idOferta, estado_postulacion: true },
    })
    .then((postulaciones) =>
      res.send({
        postulaciones,
        totalPaginas: Math.ceil(postulaciones.count / limite),
      })
    )
    .catch(() => res.sendStatus(500));
};


export const getPorIdOfertaTodas = async (req, res) => {
  const paginaComoNumero = Number.parseInt(req.query.pagina);
  const limiteComoNumero = Number.parseInt(req.query.limite);
  const idOferta = req.params.id;

  let pagina = 0;
  if (!Number.isNaN(paginaComoNumero) && paginaComoNumero > 0) {
    pagina = paginaComoNumero;
  }

  let limite = 30;
  if (!Number.isNaN(limiteComoNumero) && limiteComoNumero > 0) {
    limite = limiteComoNumero;
  }
 
  models.postulaciones
    .findAndCountAll({
      limit: limite,
      offset: pagina * limite,
      include: [
        {
          as: "Postulante",
          model: models.postulantes,
          attributes: ["id", "nombre", "apellido","fk_id_usuario","telefono","foto","cv"],
        },
        {
          as: "Oferta",
          model: models.ofertas,
          attributes: ["id", "titulo_oferta"],
        },        
        {
          as: "Empresa",
          model: models.empresas,
          attributes: ["id", "nombre_empresa"],
        },
      ],
      where: { fk_id_oferta: idOferta},
    })
    .then((postulaciones) =>
      res.send({
        postulaciones,
        totalPaginas: Math.ceil(postulaciones.count / limite),
      })
    )
    .catch(() => res.sendStatus(500));
};

export const getConFiltros = async (req, res) => {
  models.postulaciones.findAll({
    include: [
      {
        as: "Postulante",
        model: models.postulantes,
        attributes: ["id", "nombre", "apellido", "estado", "fk_id_usuario", "telefono"],
      },
      {
        as: "Oferta",
        model: models.ofertas,
        attributes: ["id", "titulo_oferta"],
      },        
      {
        as: "Empresa",
        model: models.empresas,
        attributes: ["id", "nombre_empresa"],
      },
    ],
    }).then(postulaciones => res.send({
      postulaciones
      
    })).catch(() => res.sendStatus(500));
};

export const postPostulaciones = async (req, res) => {
  try {
    const postulacion = await models.postulaciones.create({
      fk_id_postulante: req.body.postulante,
      fk_id_oferta: req.body.oferta,
      fk_id_empresa: req.body.empresa,
      contactado: "f",
    });

    res.status(201).send({ id: postulacion.id });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(400).send('Bad request: algún error de validación de campos');
    } else {
      console.error(`Error al intentar insertar en la base de datos: ${error}`);
      res.sendStatus(500);
    }
  }
};

const findPostulaciones= (id, { onSuccess, onNotFound, onError }) => {
    models.postulaciones
      .findOne({
        include: [
          {
            as: "Postulante",
            model: models.postulantes,
            attributes: ["id", "nombre", "apellido","fk_id_usuario","telefono"],
          },
          {
            as: "Oferta",
            model: models.ofertas,
            attributes: ["id", "titulo_oferta"],
          },        
          {
            as: "Empresa",
            model: models.empresas,
            attributes: ["id", "nombre_empresa"],
          },
        ],
        where: { id },
      })
      .then((postulaciones) => (postulaciones ? onSuccess(postulaciones) : onNotFound()))
      .catch(() => onError());
};

export const getPorId = async (req, res) => {
    findPostulaciones(req.params.id, {
      onSuccess: (postulaciones) => res.send(postulaciones),
      onNotFound: () => res.sendStatus(404),
      onError: () => res.sendStatus(500),
    });
};

export const deletePostulacion = async (req, res) => {
    const onSuccess = postulaciones =>
    postulaciones
        .destroy()
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
      findPostulaciones(req.params.id, {
      onSuccess,
      onNotFound: () => res.sendStatus(404),
      onError: () => res.sendStatus(500)
    });
};

export const updatePostulaciones = async (req, res) => {
    const onSuccess = (postulaciones) =>
    postulaciones
        .update(
          {
            fk_id_postulante: req.body.postulante,
            fk_id_oferta: req.body.oferta,
            fk_id_empresa: req.body.empresa,
            contactado: req.body.contactado,
          },
          { fields: ["fk_id_postulante", "fk_id_oferta", "fk_id_empresa", "contactado"] }
        )
        .then(() => res.sendStatus(200))
        .catch((error) => {
          if (error == "SequelizeUniqueConstraintError: Validation error") {
            res
              .status(400)
              .send("Bad request: Algun tipo de error de validacion de campos");
          } else {
            console.log(
              `Error al intentar actualizar la base de datos: ${error}`
            );
            res.sendStatus(500);
          }
        });
        findPostulaciones(req.params.id, {
      onSuccess,
      onNotFound: () => res.sendStatus(404),
      onError: () => res.sendStatus(500),
    });
};

export const activarPostulante = async (req, res) => {
  const onSuccess = (postulaciones) =>
    postulaciones
    .update(
      {
        estado_postulacion: true,
      },
      { fields: ["estado_postulacion"] }
    )
    .then(() => res.sendStatus(200))
    .catch((error) => {
      if (error == "SequelizeUniqueConstraintError: Validation error") {
        res
          .status(400)
          .send("Bad request: Algun tipo de error de validacion de campos");
      } else {
        console.log(
          `Error al intentar actualizar la base de datos: ${error}`
        );
        res.sendStatus(500);
      }
    });
    findPostulaciones(req.params.id, {
      onSuccess,
      onNotFound: () => res.sendStatus(404),
      onError: () => res.sendStatus(500),
    });
}

export const desactivarPostulacion = async (req, res) => {
  // Agregar el email de rechazo a la postulacion
  const onSuccess = (postulaciones) =>
    postulaciones
    .update(
      {
        estado_postulacion: false,
      },
      { fields: ["estado_postulacion"] }
    )
    .then(() => res.sendStatus(200))
    .catch((error) => {
      if (error == "SequelizeUniqueConstraintError: Validation error") {
        res
          .status(400)
          .send("Bad request: Algun tipo de error de validacion de campos");
      } else {
        console.log(
          `Error al intentar actualizar la base de datos: ${error}`
        );
        res.sendStatus(500);
      }
    });
    findPostulaciones(req.params.id, {
      onSuccess,
      onNotFound: () => res.sendStatus(404),
      onError: () => res.sendStatus(500),
    });
}

export const marcarContactado = async (req, res) => {
  const onSuccess = (postulaciones) =>
    postulaciones
    .update(
      {
        contactado: true,
      },
      { fields: ["contactado"] }
    )
    .then(() => res.sendStatus(200))
    .catch((error) => {
      if (error == "SequelizeUniqueConstraintError: Validation error") {
        res
          .status(400)
          .send("Bad request: Algun tipo de error de validacion de campos");
      } else {
        console.log(
          `Error al intentar actualizar la base de datos: ${error}`
        );
        res.sendStatus(500);
      }
    });
    findPostulaciones(req.params.id, {
      onSuccess,
      onNotFound: () => res.sendStatus(404),
      onError: () => res.sendStatus(500),
    });
  }

export const postularseBaseUnahur = async (req, res) => {
  models.postulantes.findOne({
    where: { fk_id_usuario: req.params.id },
  }).then((postulante) => {
    if (postulante) {
      models.postulaciones
        .create({
          fk_id_postulante: postulante.id,
          fk_id_oferta: 0,
          fk_id_empresa: 0,
          contactado: "f",
        })
        .then((postulacion) => res.send({ id: postulacion.id, idPostulante: postulante.id }))
        .catch((error) => {
          if (error.name === "SequelizeUniqueConstraintError") {
            res
              .status(400)
              .send("Bad request: algún error de validación de campos");
          } else {
            console.error(
              `Error al intentar insertar en la base de datos: ${error}`
            );
            res.sendStatus(500);
          }
        });
    } else {
      res.status(400).send("Bad request: el usuario no existe");
    }
  });
}