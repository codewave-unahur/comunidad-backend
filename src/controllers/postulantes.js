import {uploadCv} from "../services/supabase.service";
import {sendMail} from "../services/sendEmail";

const models = require("../../database/models");
const { Op } = require("sequelize");
const { Op: sequelize } = require("sequelize");

export const getConFiltros = async (req, res) => {
  try {
    const paginaComoNumero = Number.parseInt(req.query.pagina);
    const limiteComoNumero = Number.parseInt(req.query.limite);
    let ordenarPor = req.query.ordenar;
    let buscarPostulante = req.query.buscarPostulante;

    // Validar ordenarPor
    const camposValidos = ["createdAt", "otroCampoValido"];
    ordenarPor = camposValidos.includes(ordenarPor) ? ordenarPor : "createdAt";

    const pagina = !Number.isNaN(paginaComoNumero) && paginaComoNumero > 0 ? paginaComoNumero : 0;
    const limite = !Number.isNaN(limiteComoNumero) && limiteComoNumero > 0 ? limiteComoNumero : 30;

    // Busca por el nombre y el apellido 
    let [buscarNombre = "_", buscarApellido = "_"] = (buscarPostulante || "").split(" ", 2);

    if (typeof buscarApellido === "undefined") {
      buscarApellido = buscarNombre;
    }

    const postulantes = await models.postulantes.findAndCountAll({
      limit: limite,
      offset: pagina * limite,
      include: [
        {
          as: "Usuario",
          model: models.usuarios,
          attributes: ["id", "usuario", "estado", "createdAt"],
        },
        {
          as: "Aptitudes",
          model: models.aptitudes_postulantes,
          attributes: ["id"],
          include: [
            {
              as: "Aptitudes del postulante",
              model: models.aptitudes,
              attributes: ["id", "nombre_aptitud", "descripcion"],
            }
          ]
        },
        {
          as: "Preferencias",
          model: models.preferencias_postulantes,
          attributes: ["id"],
          include: [
            {
              as: "Preferencias del postulante",
              model: models.preferencias,
              attributes: ["id", "nombre_preferencia"],
            },
          ],
        }
      ],

      where: {
        [Op.or]: [
          buscarNombre !== '_' && {
            nombre: {
              [Op.iLike]: `%${buscarNombre}%`,
            },
          },
          buscarApellido !== '_' && {
            apellido: {
              [Op.iLike]: `%${buscarApellido}%`,
            },
          },
        ].filter(Boolean), // Eliminar elementos nulos o falsos
      },      
      order: [ordenarPor],
    });

    res.send({
      postulantes,
      totalPaginas: Math.ceil(postulantes.count / limite),
    });
  } catch (error) {
    console.error('Error al buscar postulantes:', error);
    res.sendStatus(400);
  }
};
const findPostulantesPorIdUsuario = (
  fk_id_usuario,
  { onSuccess, onNotFound, onError }
) => {
  console.log('Buscando postulantes por ID de usuario:', fk_id_usuario);
  models.postulantes
    .findOne({
      include: [
        {
          as: "Usuario",
          model: models.usuarios,
          attributes: ["id", "usuario", "estado", "createdAt"],
        },
        {
          as: "Estudios",
          model: models.estudios,
          attributes: ["id", "nombre_estudio_estado"],
        },
        {
          as: "Carrera",
          model: models.carreras,
          attributes: ["id", "nombre_carrera"],
        },
        {
          as: "Provincia",
          model: models.provincias,
          attributes: ["id", "nombre"],
        },
        {
          as: "Ciudad",
          model: models.ciudades,
          attributes: ["id", "nombre", "fk_id_provincia"],
        },
        {
          as: "Idiomas",
          model: models.idiomas_postulantes,
          include: [
            {
              as: "Idiomas del postulante",
              model: models.idiomas,
              attributes: ["id", "nombre_idioma", "nivel_oral", "nivel_escrito"],
            },
          ],
        },
        {
          as: "Aptitudes",
          model: models.aptitudes_postulantes,
          include: [
            {
              as: "Aptitudes del postulante",
              model: models.aptitudes,
              attributes: ["id", "nombre_aptitud", "descripcion"],
            }
          ]
        },
        {
          as: "Preferencias",
          model: models.preferencias_postulantes,
          include: [
            {
              as: "Preferencias del postulante",
              model: models.preferencias,
              attributes: ["id", "nombre_preferencia"],
            },
          ],
        }
      ],

      where: { fk_id_usuario },
    })
    .then((postulantes) =>
      postulantes ? onSuccess(postulantes) : onNotFound()
    )
    .catch((error) => {
      console.error('Error al buscar postulantes:', error);
      onError();
    });
};
export const getPorIdUsuario = async (req, res) => {
  findPostulantesPorIdUsuario(req.params.id, {
    onSuccess: (postulantes) => res.send(postulantes),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
};
const findPostulantesPorDNI = (id,{ onSuccess, onNotFound, onError }) => {
  models.postulantes
    .findOne({
      include: [
        {
          as: "Usuario",
          model: models.usuarios,
          attributes: ["id", "usuario", "estado", "createdAt"],
        },
        {
          as: "Estudios",
          model: models.estudios,
          attributes: ["id", "nombre_estudio_estado"],
        },
        {
          as: "Carrera",
          model: models.carreras,
          attributes: ["id", "nombre_carrera"],
        },
        {
          as: "Provincia",
          model: models.provincias,
          attributes: ["id", "nombre"],
        },
        {
          as: "Ciudad",
          model: models.ciudades,
          attributes: ["id", "nombre", "fk_id_provincia"],
        },
        {
          as: "Idiomas",
          model: models.idiomas_postulantes,
          attributes: ["id"],
          include: [
            {
              as: "Idiomas del postulante",
              model: models.idiomas,
              attributes: ["id", "nombre_idioma", "nivel_oral", "nivel_escrito"],
            },
          ],
        },
        {
          as: "Preferencias",
          model: models.preferencias_postulantes,
          attributes: ["id"],
          include: [
            {
              as: "Preferencias del postulante",
              model: models.preferencias,
              attributes: ["id", "nombre_preferencia"],
            },
          ],
        },
        {
          as: "Aptitudes",
          model: models.aptitudes_postulantes,
          attributes: ["id"],
          include: [
            {
              as: "Aptitudes del postulante",
              model: models.aptitudes,
              attributes: ["id", "nombre_aptitud", "descripcion"],
            }
          ]
        }
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
    onNotFound: () => res.sendStatus(404),
    onError: (error) => res.sendStatus(400, error),
  });
};
export const findUsuarioPorDNI = async (dni) => {
  try {
    const postulantes = await models.postulantes.findAndCountAll({
      include: [
        {
          as: "Usuario",
          model: models.usuarios,
          attributes: ["id", "usuario"],
        },
      ],
      where: { fk_id_usuario: dni },
    });

    return postulantes ? postulantes : false;
  } catch (error) {
    console.error(`Error al buscar usuario por DNI: ${error}`);
  }
};
export const postPostulante = async (req, res) => {
  try{
    const postulante = await models.postulantes
    .create({
      id: req.body.documento,
      tipo_documento: req.body.tipoDocumento,
      fk_id_usuario: req.body.idUsuario,
      fk_id_estudios: req.body.estudios,
      fk_id_carrera: req.body.carrera,
      estado: "Activo",
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      genero: req.body.genero,
      discapacidad: req.body.discapacidad,
      nacionalidad: req.body.nacionalidad,
      fecha_nac: req.body.fecha_nac,
      pais: req.body.pais,
      fk_id_provincia: req.body.provincia,
      fk_id_ciudad: req.body.ciudad,
      calle: req.body.calle,
      nro: req.body.nro,
      piso: req.body.piso,
      depto: req.body.depto,
      cp: req.body.cp,
      telefono: req.body.telefono,
      segundoTelefono: req.body.segundoTelefono,
      cant_materias: req.body.cantMaterias,
      alumno_unahur: req.body.alumnoUnahur,
      presentacion: req.body.presentacion,
      cv: req.body.cv,
      foto: req.body.foto,
      linkedIn: req.body.linkedIn,
      portfolio: req.body.portfolio
    });


    //await uploadCv(process.env.SUPABASE_BUCKET, 'cv',`${req.params.id}`, req.body.cv)
    await enableUser(req.body.idUsuario); //Aca habilitamos el usuario
    console.log(process.env.SUPABASE_BUCKET)
    res.status(201).send({ id: postulante.id });

    const datosPosutlante = {
      nombre: postulante.nombre,
      apellido: postulante.apellido
    }

    await sendMail(process.env.EMAIL_ADMIN, datosPosutlante, 'nuevoPostulante')

    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        res.status(401).send("Bad request: este dni ya se dio de alta");
      } else {
        console.log(`Error al intentar insertar en la base de datos: ${error}`);
        res.sendStatus(500);
      }
    }
};
//Con esto habilitamos el usuario cuando de el alta en postulantes
const enableUser = async (id_usuario) => {
  models.usuarios.update(
    { estado: "t" },
    {
      where: {
        id: id_usuario,
      },
    }
  );
};
export const deletePostulante = async (req, res) => {
  const onSuccess = postulantes =>
  postulantes
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findPostulantesPorDNI(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
};
export const agregarPreferencias = async (req, res) => {
  const preferenciasNuevas = req.body.preferencias;

  try {
    for (const preferencia of preferenciasNuevas) {
      await models.preferencias_postulantes.create({
        fk_id_postulante: req.params.id,
        fk_id_preferencia: preferencia.id
      });
    }

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
export const eliminarPreferencias = async (req, res) => {
  try {
    await models.preferencias_postulantes.destroy({
      where: {
        id: req.params.id,
      }
    });

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
export const agregarAptitudes = async (req, res) => {
  const aptitudesNuevas = req.body.aptitudes;

  try {
    for (const aptitud of aptitudesNuevas) {
      await models.aptitudes_postulantes.create({
        fk_id_usuario: req.params.id,
        fk_id_aptitud: aptitud.id
      });
    }

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
export const eliminarAptitudes = async (req, res) => {
  try {
    await models.aptitudes_postulantes.destroy({
      where: {
        id: req.params.id,
      }
    });
    
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
export const agregarIdiomas = async (req, res) => {
  const idiomasNuevos = req.body.idiomas;

  for (const idioma of idiomasNuevos) {
    try {
      const idiomas = await models.idiomas.findOne({
        where: {
          nombre_idioma: idioma.nombre_idioma,
          nivel_oral: idioma.nivel_oral,
          nivel_escrito: idioma.nivel_escrito
        }
      });

      const idiomaPostulante = await models.idiomas_postulantes.create({
        fk_id_postulante: req.params.id,
        fk_id_idioma: idiomas.id
      });
      // Puedes hacer algo con idiomaPostulante si es necesario
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }
  res.sendStatus(200);
};
export const eliminarIdioma = async (req, res) => {
  try {
    await models.idiomas_postulantes.destroy({
      where: {
        id: req.params.id
      }
    });
    
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
export const updatePostulante = async (req, res) => {
  const onSuccess = postulantes =>
    postulantes
      .update({
        id: req.body.documento,
        tipo_documento: req.body.tipoDocumento,
        fk_id_usuario: req.body.idUsuario,
        fk_id_estudios: req.body.estudios,
        fk_id_carrera: req.body.carrera,
        estado: "Activo",
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        genero: req.body.genero,
        discapacidad: req.body.discapacidad,
        nacionalidad: req.body.nacionalidad,
        fecha_nac: req.body.fecha_nac,
        pais: req.body.pais,
        fk_id_provincia: req.body.provincia,
        fk_id_ciudad: req.body.ciudad,
        calle: req.body.calle,
        nro: req.body.nro,
        piso: req.body.piso,
        depto: req.body.depto,
        cp: req.body.cp,
        telefono: req.body.telefono,
        segundoTelefono: req.body.segundoTelefono,
        cant_materias: req.body.cantMaterias,
        alumno_unahur: req.body.alumnoUnahur,
        presentacion: req.body.presentacion,
        cv: req.body.cv,
        foto: req.body.foto,
        linkedIn: req.body.linkedIn,
        portfolio: req.body.portfolio
      })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findPostulantesPorDNI(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
}
export const postulantesBaseUnahur = async (req, res) => {
  try {
    const paginaComoNumero = Number.parseInt(req.query.pagina);
    const limiteComoNumero = Number.parseInt(req.query.limite);
    let ordenarPor = req.query.ordenar;
    let buscarPostulante = req.query.buscarPostulante;

    // Validar ordenarPor
    const camposValidos = ["createdAt", "otroCampoValido"];
    ordenarPor = camposValidos.includes(ordenarPor) ? ordenarPor : "createdAt";

    const pagina = !Number.isNaN(paginaComoNumero) && paginaComoNumero > 0 ? paginaComoNumero : 0;
    const limite = !Number.isNaN(limiteComoNumero) && limiteComoNumero > 0 ? limiteComoNumero : 30;

    // Busca por el nombre y el apellido 
    let [buscarNombre = "_", buscarApellido = "_"] = (buscarPostulante || "").split(" ", 2);

    if (typeof buscarApellido === "undefined") {
      buscarApellido = buscarNombre;
    }

    const postulantes = await models.postulantes.findAndCountAll({
      limit: limite,
      offset: pagina * limite,
      include: [
        {
          as: "Usuario",
          model: models.usuarios,
          attributes: ["id", "usuario", "estado", "createdAt"],
        },
        {
          as: "Postulaciones",
          model: models.postulaciones,
          attributes: ["id", "fk_id_oferta"],
          where : {
            fk_id_oferta : 0
          },
        },
        {
          as: "Aptitudes",
          model: models.aptitudes_postulantes,
          attributes: ["id"],
          include: [
            {
              as: "Aptitudes del postulante",
              model: models.aptitudes,
              attributes: ["id", "nombre_aptitud", "descripcion"],
            }
          ]
        },
        {
          as: "Preferencias",
          model: models.preferencias_postulantes,
          attributes: ["id"],
          include: [
            {
              as: "Preferencias del postulante",
              model: models.preferencias,
              attributes: ["id", "nombre_preferencia"],
            },
          ],
        }
      ],
      where: {
        [Op.or]: [
          buscarNombre !== '_' && {
            nombre: {
              [Op.iLike]: `%${buscarNombre}%`,
            },
          },
          buscarApellido !== '_' && {
            apellido: {
              [Op.iLike]: `%${buscarApellido}%`,
            },
          },
        ].filter(Boolean), // Eliminar elementos nulos o falsos
      },      
      order: [ordenarPor],
    });

    res.send({
      postulantes,
      totalPaginas: Math.ceil(postulantes.count / limite),
    });
  } catch (error) {
    console.error('Error al buscar postulantes:', error);
    res.sendStatus(400);
  }
};