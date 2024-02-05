const models = require("../../database/models");

// Obtener todas las ciudades
export const getAll = async (req, res) => {
  try {
    const ciudades = await models.ciudades.findAll({
      attributes: ["id", "nombre", "fk_id_provincia"],
      order: [
        ['nombre', 'ASC'],
      ],
    });
    res.send({ ciudades });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

// Crear una nueva ciudad
export const createCiudad = async (req, res) => {
  const { nombre, fk_id_provincia } = req.body;

  try {
    await models.ciudades.create({ nombre, fk_id_provincia });
    res.status(201).send(`OK`);
  } catch (error) {
    res.sendStatus(500).send(error);
  }
};

// Actualizar una ciudad por ID
export const updateCiudadById = async (req, res) => {
  const id = req.params.id;
  const { nombre, fk_id_provincia } = req.body;

  try {
    const ciudad = await models.ciudades.findOne({ where: { id } });

    if (ciudad) {
      await ciudad.update({ nombre, fk_id_provincia });
      res.send({ ciudad });
    } else {
      res.status(404).send({ message: "Ciudad no encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

// Eliminar una ciudad por ID
export const deleteCiudadById = async (req, res) => {
  const id = req.params.id;

  try {
    const ciudad = await models.ciudades.findOne({ where: { id } });

    if (ciudad) {
      await ciudad.destroy();
      res.send({ message: "Ciudad eliminada correctamente" });
    } else {
      res.status(404).send("NOT FOUND");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// Obtener todas las ciudades de una provincia
export const getCiudadesByProvinciaId = async (req, res) => {

  const provinciaId = req.params.id;

  console.log("provinciaId:", provinciaId);

  try {
    // Verificamos si provinciaId es un objeto y si tiene una propiedad id
    const idProvincia = provinciaId && provinciaId.id ? provinciaId.id : provinciaId;

    console.log("idProvincia:", idProvincia);

    if (idProvincia === undefined) {
      return res.status(400).send({ error: "ID de provincia no proporcionado" });
    }

    const ciudades = await models.ciudades.findAll({
      attributes: ["id", "nombre", "fk_id_provincia"],
      where: {
        fk_id_provincia: idProvincia,
      },
      order: [
          ['nombre', 'ASC']
      ]
    });

    res.send({ ciudades });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

