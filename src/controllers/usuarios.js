const models = require("../../database/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config("../../.env");
const jwtUtils = require('../util/generateToken')


//Creamos un usuario
export const signUp = async (req, res) => {
  try {
    // Desestructurar datos de entrada
    const { usuario, password, grupo } = req.body;

    // Validar existencia y formato de datos de entrada
    if (!usuario || !password || !grupo) {
      return res.status(400).send("Bad request: Datos de entrada incompletos");
    }

    // Obtener el largo de la contraseña
    const passwordLength = password.length;

    // Generar salt y hashear la contraseña con bcrypt
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    // Definir longitud mínima de contraseña
    const minPasswordLength = 6;

    // Buscar si existe el usuario en la base
    const findUsuarioHabilitado = await models.usuarios.findOne({
      where: { usuario, estado: true },
    });

    if (findUsuarioHabilitado !== null) {
      return res.status(402).send("Bad request: El usuario ya existe");
    }

    const findUsuarioInhabilitado = await models.usuarios.findOne({
      where: { usuario, estado: false },
    });

    if (findUsuarioInhabilitado !== null) {
      return res.status(200).send({ id: findUsuarioInhabilitado.id });
    }

    // Luego de algunas validaciones, insertamos el usuario en la tabla o devolvemos un error.
    if (passwordLength >= minPasswordLength) {
      const createdUsuario = await models.usuarios.create({
        usuario,
        password: hashPassword,
        fk_id_grupo: grupo,
        estado: "0",
      });

      return res.status(201).send({ id: createdUsuario.id });
    } else {
      return res.status(401).send("Bad request: La contraseña no cumple con la longitud mínima");
    }
  } catch (error) {
    console.error("Error en signUp:", error);
    return res.status(500).send("Internal Server Error");
  }
};


export const getAll = async (req, res) => {
  models.usuarios
    .findAll({
      attributes: ["id", "usuario", "fk_id_grupo", "estado", "createdAt"],
      include: [
        {
          as: "Grupos",
          model: models.grupos,
          attributes: ["id", "descripcion"],
        },
      ],
    })
    .then((usuarios) =>
      res.send({
        usuarios,
      })
    )
    .catch(() => res.sendStatus(400));
};

const findUsuarioPorId = (id, { onSuccess, onNotFound, onError }) => {
  models.usuarios
    .findOne({
      where: { id },
    })
    .then((usuarios) => (usuarios ? onSuccess(usuarios) : onNotFound()))
    .catch(() => onError());
};

export const getUserId = (req, res) => {
  const onSuccess = (usuario) => res.json(usuario);

  findUsuarioPorId(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
};


export const signIn = async (req, res) => {
  try{
    const { usuario , password } = req.body;

    // Validar existencia y formato de entrada
    if(!usuario || !password){
      return res.status(400).send('Bad request: Usuario y contraseñas son obligatorias')
    }

    // Validar si el usuario existe en la base de datos
    const findUsuario = await models.usuarios.findOne({
      where: { usuario },
    });

    // Si existe usuario
    if(findUsuario){
      const passwordMatch = await bcrypt.compare(password, findUsuario.password);

      if(passwordMatch){
        const accessToken = jwtUtils.generateAccessToken(usuario);

        const response = {
          message: findUsuario.estado ? "Usuario autenticado" : "Usuario no completo el formulario de postulante",
          id: findUsuario.id,
          grupo: findUsuario.fk_id_grupo,
          estado: findUsuario.estado,
        };
        return res.header('Authorization', accessToken).json(response);
      }
    }
    return res.status(400).send('Usuario o contraseña invalidos')
  }
  catch (error) {
    console.error('Error en signIn:', error);
    return res.status(500).send('Internal Server Error')

  }
}

export const deleteUsuario = async (req, res) => {
  const onSuccess = usuarios =>
  usuarios
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
      findUsuarioPorId(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
};


export const updateUsuariobyId = async (req, res) => {
  const onSuccess = (usuario) =>
    usuario
      .update({
        usuario: req.body.usuario,
      })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        if (error.name === "SequelizeUniqueConstraintError") {
          res.status(400).send("Bad request: Algun tipo de error de validacion de campos");
        } else {
          console.log(`Error al intentar actualizar la base de datos: ${error}`);
          res.sendStatus(500);
        }
      });

  findUsuarioPorId(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
};

const findUsuarioPorEmail = (usuario, { onSuccess, onNotFound, onError }) => {
  models.usuarios
    .findOne({
      where: { usuario: usuario },
    })
    .then((usuarios) => (usuarios ? onSuccess(usuarios) : onNotFound()))
    .catch(() => onError());
};

export const updateUsuarioByMail = async (req, res) => {
  const onSuccess = (usuario) =>
    usuario
      .update({
        usuario: req.body.usuario,
      })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        if (error.name === "SequelizeUniqueConstraintError") {
          res.status(400).send("Bad request: Algun tipo de error de validacion de campos");
        } else {
          console.log(`Error al intentar actualizar la base de datos: ${error}`);
          res.sendStatus(500);
        }
      });

    findUsuarioPorEmail(req.params.usuario, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500),
  });
};
