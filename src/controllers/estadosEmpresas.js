const models = require("../../database/models");

export const createEstadoEmpresa = async (req, res) => {
  const { nombre_estado } = req.body;

  try {
    const newEstadoEmpresa = await models.estado_empresas.create({
      nombre_estado
    });

    res.status(201).send({ estado: newEstadoEmpresa });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const getAll = async (req, res) => {
  try {
    const estadosEmpresas = await models.estado_empresas.findAll({
      attributes: ['id', 'nombre_estado'],
    });

    res.send({ estados: estadosEmpresas });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const getEstadoEmpresaById = async (req, res) => {
  const estadoEmpresaId = req.params.id;

  try {
    const estadoEmpresa = await models.estado_empresas.findOne({
      attributes: ['id', 'nombre_estado'],
      where: {
        id: estadoEmpresaId,
      },
    });

    if (estadoEmpresa) {
      res.send({ estado: estadoEmpresa });
    } else {
      res.status(404).send("NOT FOUND");
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const updateEstadoEmpresa = async (req, res) => {
  const estadoEmpresaId = req.params.id;
  const { nombre_estado } = req.body;

  try {
    const updatedEstadoEmpresa = await models.estado_empresas.update(
      { nombre_estado },
      {
        where: {
          id: estadoEmpresaId,
        },
      }
    );

    if (updatedEstadoEmpresa[0]) {
      res.status(200).send("OK");
    } else {
      res.status(404).send("NOT FOUND");
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const deleteEstadoEmpresa = async (req, res) => {
  const estadoEmpresaId = req.params.id;

  try {
    const deletedEstadoEmpresa = await models.estado_empresas.destroy({
      where: {
        id: estadoEmpresaId,
      },
    });

    if (deletedEstadoEmpresa) {
      res.status(200).send("OK");
    } else {
      res.status(404).send("NOT FOUND");
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
