const models = require("../../database/models");
const { Op: sequelize } = require("sequelize");

export const getOfertasPorFiltros = async (req, res) => {
  let paginaComoNumero = Number.parseInt(req.query.pagina);
  let limiteComoNumero = Number.parseInt(req.query.limite);
  let ordenarPor = req.query.ordenar;
  let buscarTitulo = req.query.buscarTitulo;
  let estado = req.query.estado;

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

  if (typeof buscarTitulo === "undefined") {
    buscarTitulo = "_";
  } else {
    buscarTitulo = buscarTitulo.replace(/\s/g, "%");
  }

  if (typeof estado === "undefined") {
    estado = "Activo";
 }

  models.ofertas
    .findAndCountAll({
      limit: limite,
      offset: pagina * limite,
      include: [
        {
          as: "Empresa",
          model: models.empresas,
          attributes: ["id", "nombre_empresa", "descripcion", "logo"],
        },
        {
          as: "Estudio",
          model: models.estudios,
          attributes: ["id", "nombre_estudio_estado"],
        },
        {
          as: "Carrera",
          model: models.carreras,
          attributes: ["id", "nombre_carrera"],
        },
        {
          as: "Jornada",
          model: models.jornadas,
          attributes: ["id", "nombre_jornada"],
        },
        {
          as: "Contrato",
          model: models.contratos,
          attributes: ["id", "nombre_contrato"],
        },
        {
          as: "Idiomas",
          model: models.idiomas_ofertas,
          attributes: ["id"],
          include: [
            {
            as: "Idiomas de oferta",
            model: models.idiomas,
            attributes: ["id", "nombre_idioma"],
            }
          ],
        },
        {
          as: "Aptitudes",
          model: models.aptitudes_ofertas,
          attributes: ["id"],
          include: [
            {
            as: "Aptitudes de oferta",
            model: models.aptitudes,
            attributes: ["id", "nombre_aptitud"],
            }
          ],
        },
        {
          as: "Preferencias",
          model: models.preferencias_ofertas,
          attributes: ["id"],
          include : [
            {
            as: "Preferencia de oferta",
            model: models.preferencias,
            attributes: ["id", "nombre_preferencia"],
            }
          ]
        }
        
      ],
      where: {
        [sequelize.and]: [
          {
            titulo_oferta: {
              [sequelize.iLike]: `%${buscarTitulo}%`,
            },
            estado: {
              [sequelize.iLike]: `%${estado}%`
            },
            id: { [sequelize.gt]: 0 },
          },
        ],
      },
      order: [[ordenarPor, 'DESC'],],
    })
    .then((ofertas) =>
      res.send({
        ofertas,
        totalPaginas: Math.ceil(ofertas.count / limite),
      })
    )
    .catch(() => res.sendStatus(500));
};

export const getOfertas = async (req, res) => {
  let pagina = Number.parseInt(req.query.pagina);
  let limite = Number.parseInt(req.query.limite);

  if (!pagina){
    pagina = 0;
  }
  if(!limite){
    limite = 1000;
  }
  models.ofertas
    .findAndCountAll({
      limit: limite,
      offset: pagina * limite,
      include: [
        {
          as: "Empresa",
          model: models.empresas,
          attributes: ["id", "nombre_empresa", "descripcion", "logo"],
        },
        {
          as: "Estudio",
          model: models.estudios,
          attributes: ["id", "nombre_estudio_estado"],
        },
        {
          as: "Carrera",
          model: models.carreras,
          attributes: ["id", "nombre_carrera"],
        },
        {
          as: "Jornada",
          model: models.jornadas,
          attributes: ["id", "nombre_jornada"],
        },
        {
          as: "Contrato",
          model: models.contratos,
          attributes: ["id", "nombre_contrato"],
        },
        {
          as: "Idiomas",
          model: models.idiomas_ofertas,
          attributes: ["id"],
          include: [
            {
            as: "Idiomas de oferta",
            model: models.idiomas,
            attributes: ["id", "nombre_idioma"],
            }
          ],
        }
      ],
      where: {
        id: { [sequelize.gt]: 0 },
      },
    })
    .then((ofertas) =>
      res.send({
        ofertas,
        totalPaginas: Math.ceil(ofertas.count / limite),
      })
    )
    .catch((error) => res.send(error));
};

const findOferta = (id, { onSuccess, onNotFound, onError }) => {
  models.ofertas
    .findOne({
      include: [
        {
          as: "Empresa",
          model: models.empresas,
          attributes: ["id", "nombre_empresa", "descripcion", "logo"],
        },
        {
          as: "Estudio",
          model: models.estudios,
          attributes: ["id", "nombre_estudio_estado"],
        },
        {
          as: "Carrera",
          model: models.carreras,
          attributes: ["id", "nombre_carrera"],
        },
        {
          as: "Jornada",
          model: models.jornadas,
          attributes: ["id", "nombre_jornada"],
        },
        {
          as: "Contrato",
          model: models.contratos,
          attributes: ["id", "nombre_contrato"],
        },
        {
          as: "Idiomas",
          model: models.idiomas_ofertas,
          attributes: ["id"],
          include: [
            {
            as: "Idiomas de oferta",
            model: models.idiomas,
            attributes: ["id", "nombre_idioma"],
            }
          ],
        }
      ],
      where: { id },
    })
    .then((ofertas) => (ofertas ? onSuccess(ofertas) : onNotFound()))
    .catch(() => onError());
};

export const getIdOferta = async (req, res) => {
  findOferta(req.params.id, {
    onSuccess: (ofertas) => res.send(ofertas),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
};

// Si buscas solo el cuit de la empresa te trae todas las ofertas que tiene con el estado activa.
// Si buscas con el cuit y el titulo, te trae los titulos mas parecidos con el estado activa.
// O buscar con el cuit y el estado, te trae las ofertas con el estado que vos queres.
export const getOfertasPorIdEmpresa = async (req, res) => {
  let buscarTitulo = req.query.buscarTitulo;
  let pagina = req.query.pagina;
  let limite = req.query.limite;
  let fk_id_empresa = req.params.id;

  if (typeof buscarTitulo === "undefined") {
    buscarTitulo = "_";
  } else {
    buscarTitulo = buscarTitulo.replace(/\s/g, "%");
  }

  if (typeof pagina === "undefined") {
    pagina = 0;
  }

  if (typeof limite === "undefined") {
    limite = 30;
  }

  models.ofertas
    .findAndCountAll({
      limit: limite,
      offset: pagina * limite,
      include: [
        {
          as: "Empresa",
          model: models.empresas,
          attributes: ["id", "nombre_empresa", "descripcion", "logo"],
        },
        {
          as: "Estudio",
          model: models.estudios,
          attributes: ["id", "nombre_estudio_estado"],
        },
        {
          as: "Carrera",
          model: models.carreras,
          attributes: ["id", "nombre_carrera"],
        },
        {
          as: "Jornada",
          model: models.jornadas,
          attributes: ["id", "nombre_jornada"],
        },
        {
          as: "Contrato",
          model: models.contratos,
          attributes: ["id", "nombre_contrato"],
        },
        {
          as: "Idiomas",
          model: models.idiomas_ofertas,
          attributes: ["id"],
          include: [
            {
            as: "Idiomas de oferta",
            model: models.idiomas,
            attributes: ["id", "nombre_idioma"],
            }
          ],
        }
      ],
      where: {
        fk_id_empresa,
        titulo_oferta: {
          [sequelize.iLike]: `%${buscarTitulo}%`,
        }
      },
    })
    .then((ofertas) =>
      res.send({
        ofertas,
        totalPaginas: Math.ceil(ofertas.count / limite),
      })
    )
    .catch(() => res.sendStatus(500));
};

export const createOferta = async (req, res) => {
  models.ofertas
    .create({
      fk_id_empresa: req.body.idEmpresa,
      fk_id_jornada: req.body.idJornada,
      fk_id_contrato: req.body.idContrato,
      fk_id_estudio: req.body.idEstudio,
      fk_id_carrera: req.body.idCarrera,
      estado: "Pendiente",
      cierre: null,
      check: null,
      genero: req.body.genero,
      modalidadDeTrabajo: req.body.modalidadDeTrabajo,
      tareasARealizar: req.body.tareasARealizar,
      fecha_vigencia: req.body.fechaVigencia,
      titulo_oferta: req.body.tituloOferta,
      descripcion: req.body.descripcion,
      edad_desde: req.body.edadDesde,
      edad_hasta: req.body.edadHasta,
      experiencia_previa_desc: req.body.experienciaPreviaDesc,
      zona_trabajo: req.body.zonaTrabajo,
      areas_estudio: req.body.areasEstudio,
      otros_detalles: req.body.otrosDetalles,
      beneficios: req.body.beneficios,
      remuneracion: req.body.remuneracion,
      horario_laboral_desde: req.body.horarioLaboralDesde,
      horario_laboral_hasta: req.body.horarioLaboralHasta,
    }).then(
      (ofertas) => {
        if (req.body.idiomas.length > 0) {
          req.body.idiomas.forEach((idioma) => {
            models.idiomas.findOne({
              where: {
                nombre_idioma: idioma.nombre_idioma,
                nivel_oral: idioma.nivel_oral,
                nivel_escrito: idioma.nivel_escrito
              }}).then(
                (idiomas) => {
                  models.idiomas_ofertas.create({
                    fk_id_oferta: ofertas.id,
                    fk_id_idioma: idiomas.id,
                  });
                }
              );
          });
        }
      }
    ).then(
      (ofertas) => {
        if (req.body.preferencias.length > 0) {
          req.body.preferencias.forEach((preferencia) => {
            models.preferencias_ofertas.create({
              fk_id_oferta: ofertas.id,
              fk_id_preferencia: preferencia.id,
            });
          });
        }
      }
    ).then (
      (ofertas) => {
        if (req.body.aptitudes.length > 0) {
          req.body.aptitudes.forEach((aptitud) => {
            models.aptitudes_ofertas.create({
              fk_id_oferta: ofertas.id,
              fk_id_aptitud: aptitud.id,
            });
          });
        }
      }
    )
    .then((ofertas) => res.status(201).send({ id: ofertas.id }))
    .catch((error) => {
      if (error == "SequelizeUniqueConstraintError: Validation error") {
        res.status(401).send("Bad request: Algun tipo de error de validacion de campos");
      } else {
        console.log(`Error al intentar insertar en la base de datos: ${error}`);
        res.sendStatus(500);
      }
    });
};

export const deleteOferta = async (req, res) => {
  const onSuccess = (ofertas) =>
    ofertas
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findOferta(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
};

export const updateOfertas = async (req, res) => {
  const onSuccess = (ofertas) =>
    ofertas
      .update(
        {
          fk_id_jornada: req.body.idJornada,
          fk_id_contrato: req.body.idContrato,
          fk_id_estudio: req.body.idEstudio,
          fk_id_carrera: req.body.idCarrera,
          estado: req.body.estado,
          cierre: req.body.cierre,
          check: req.body.check,
          modalidadDeTrabajo: req.body.modalidadDeTrabajo,
          tareasARealizar: req.body.tareasARealizar,
          genero: req.body.genero,
          fecha_vigencia: req.body.fechaVigencia,
          titulo_oferta: req.body.tituloOferta,
          descripcion: req.body.descripcion,
          horario_laboral_desde: req.body.horarioLaboralDesde,
          horario_laboral_hasta: req.body.horarioLaboralHasta,
          edad_desde: req.body.edadDesde,
          edad_hasta: req.body.edadHasta,
          experiencia_previa_desc: req.body.experienciaPreviaDesc,
          zona_trabajo: req.body.zonaTrabajo,
          areas_estudio: req.body.areasEstudio,
          otros_detalles: req.body.otrosDetalles,
          beneficios: req.body.beneficios,
          remuneracion: req.body.remuneracion,
        },
        { fields: ["fk_id_jornada", "fk_id_contrato", "fk_id_estudio","fk_id_carrera","estado", "cierre", "check", "modalidadDeTrabajo", "tareasARealizar", "genero", "fecha_vigencia","titulo_oferta","descripcion","horario_laboral_desde","horario_laboral_hasta","edad_desde","edad_hasta","experiencia_previa_desc","zona_trabajo","areas_estudio","otros_detalles","beneficios","remuneracion"] }
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
  findOferta(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
};

//get ofertas with the order of the amount of preferences or aptitudes matched
export const getOfertasPorFiltrosRecomendado = async (req, res) => {
  let paginaComoNumero = Number.parseInt(req.query.pagina);
  let limiteComoNumero = Number.parseInt(req.query.limite);
  let ordenarPor = req.query.ordenar;
  let buscarTitulo = req.query.buscarTitulo;
  let estado = req.query.estado;
  
  let postulante;
  try {
    const post = await models.postulantes.findOne({
      where: { fk_id_usuario: req.query.id },
    });
  
    postulante = await models.postulantes.findOne({
      include: [
        {
          as: "Preferencias",
          model: models.preferencias_postulantes,
          attributes: ["id"],
          include: [
            {
              as: "Preferencias del postulante",
              model: models.preferencias,
              attributes: ["id", "nombre_preferencia"],
            }
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
              attributes: ["id", "nombre_aptitud"],
            }
          ],
        }
      ],
      where: { id: post.id },
    });
  } catch (error) {
    res.send({
      error
    });
  }


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

  if (typeof buscarTitulo === "undefined") {
    buscarTitulo = "_";
  } else {
    buscarTitulo = buscarTitulo.replace(/\s/g, "%");
  }

  if (typeof estado === "undefined") {
    estado = "Activo";
 }

  const cantidadPreferenciasPostulante = postulante.Preferencias.length;
  const cantidadAptitudesPostulante = postulante.Aptitudes.length;
  const cantidadTotalAtributos = cantidadPreferenciasPostulante + cantidadAptitudesPostulante ? (cantidadPreferenciasPostulante + cantidadAptitudesPostulante > 0) : 1;
  let ofertas;
  try {
    ofertas = await models.ofertas.findAndCountAll({
      limit: limite,
      offset: pagina * limite,
      include: [
        {
          as: "Empresa",
          model: models.empresas,
          attributes: ["id", "nombre_empresa", "descripcion", "logo"],
        },
        {
          as: "Estudio",
          model: models.estudios,
          attributes: ["id", "nombre_estudio_estado"],
        },
        {
          as: "Carrera",
          model: models.carreras,
          attributes: ["id", "nombre_carrera"],
        },
        {
          as: "Jornada",
          model: models.jornadas,
          attributes: ["id", "nombre_jornada"],
        },
        {
          as: "Contrato",
          model: models.contratos,
          attributes: ["id", "nombre_contrato"],
        },
        {
          as: "Idiomas",
          model: models.idiomas_ofertas,
          attributes: ["id"],
          include: [
            {
            as: "Idiomas de oferta",
            model: models.idiomas,
            attributes: ["id", "nombre_idioma"],
            }
          ],
        },
        {
          as: "Aptitudes",
          model: models.aptitudes_ofertas,
          attributes: ["id"],
          include: [
            {
            as: "Aptitudes de oferta",
            model: models.aptitudes,
            attributes: ["id", "nombre_aptitud"],
            }
          ],
        },
        {
          as: "Preferencias",
          model: models.preferencias_ofertas,
          attributes: ["id"],
          include: [
            {
            as: "Preferencia de oferta",
            model: models.preferencias,
            attributes: ["id", "nombre_preferencia"],
            }
          ],
        }
      ],
      where: {
        [sequelize.and]: [
          {
            titulo_oferta: {
              [sequelize.iLike]: `%${buscarTitulo}%`,
            },
            estado: {
              [sequelize.iLike]: `%${estado}%`
            },
            id: { [sequelize.gt]: 0 },
          },
        ],
      },
      order: [[ordenarPor, 'DESC'],],
    })
  }
  catch (error) {
    res.send({
      error
    });
  }
  
  try {
    ofertas.rows.forEach(async (oferta) => {
  
      //calcular matchs de preferencias
      let cantidadPreferenciasMatch = 0;
      if (oferta.Preferencias.length > 0) {
        oferta.Preferencias.forEach((preferenciaOferta) => {
          if (postulante.Preferencias.length > 0 ) {
            postulante.Preferencias.forEach((preferenciaPostulante) => {
              if (preferenciaPostulante["Preferencias del postulante"].id == preferenciaOferta["Preferencia de oferta"].id) {
                cantidadPreferenciasMatch++;
              }
            });
          }
        });
      }

      //calcular matchs de aptitudes
      let cantidadAptitudesMatch = 0;
      if (oferta.Aptitudes.length > 0) {
      oferta.Aptitudes.forEach((aptitudOferta) => {
        if (postulante.Aptitudes.length > 0) {
          postulante.Aptitudes.forEach((aptitudPostulante) => {
          if (aptitudPostulante["Aptitudes del postulante"].id == aptitudOferta["Aptitudes de oferta"].id) {
            cantidadAptitudesMatch++;
           }
          });
        }
      });
      }

      //calcular matchs totales
      const porcentajeTotalMatch = (cantidadAptitudesMatch + cantidadPreferenciasMatch) / cantidadTotalAtributos ;

      //agregar oferta a la lista de ofertas ordenadas
      oferta.porcentajeMatch = porcentajeTotalMatch ? (porcentajeTotalMatch !== null || porcentajeTotalMatch > 0) : 0;
    })
    // order by porcentajeMatch
    ofertas.rows = ofertas.rows.sort((a, b) => (a.porcentajeMatch < b.porcentajeMatch) ? 1 : -1)
  
    res.send({
      ofertas,
      totalPaginas: Math.ceil(ofertas.count / limite),
    })
  }
  catch (error) {
    res.send({
      error
    });
  }
};