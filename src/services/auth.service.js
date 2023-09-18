const JWT = require("jsonwebtoken");
const User = require("../../database/models/usuarios.js");
const models = require("../../database/models");

const Token = require("../../database/models/tokens.js");
const sendEmail = require("../../database/utils/sendEmail.js");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const JWTSecret = process.env.SECRET;
const bcryptSalt = process.env.BCRYPT_SALT;
const clientURL = process.env.CLIENT_URL;
const puerto = process.env.PORT;

const findUsuario = (email) => {
  return models.usuarios
    .findOne({ where: { usuario: email } })
    .then((usuario) => (usuario ? usuario : false));
};

export const signup = async (req, res) => {
  const usuario = await req.usuario;
  // en caso de que se use este metodo, hay que hasear la password..
  const password = await req.password;
    // el usuario es el email..
  let user = await findUsuario(req.usuario);
  if (user) {
    throw new Error("Ya existe el correo electrónico", 422);
  }
  const token = JWT.sign({ id: user.id }, JWTSecret);
  //Aca me da entender que se guardaria en la tabla de usuarios...
  //await user.save();
  // Entonces creo un usuario nuevo que no exista en la base.
  console.log("Password",password)
  models.usuarios
      .create(
        {
          id: req.id,
          usuario: usuario,
          password: password,
          fk_id_grupo: "1",
          estado: "0",
        }
      );
      // me lo agrega con las password hasheada pero nose de onde lo saca... <.<
  console.log("Password",password)
  return ({
    id: req.id,
    usuario: usuario,
    token: token,
  });
};

const findToken = (id) => {
  return models.tokens
    .findOne({ where: { userId: id } })
    .then((token) => (token ? token : false));
};

export const requestPasswordReset = async (usuario) => {
  const user = await findUsuario(usuario);
  if (!user) throw new Error("El correo electrónico no existe.");

  let token = await findToken(user.id);
  if (token) await token.destroy();

  let resetToken = crypto.randomBytes(32).toString("hex");
  const hash = await bcrypt.hash(resetToken, Number(bcryptSalt));

  models.tokens.create({
    userId: user.id,
    token: hash,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }).then((token) => {
    // `token` contendrá el registro creado con el `id` autoincremental asignado por la base de datos
    console.log('Token creado con ID:', token.id);
  }).catch((error) => {
    console.error('Error al crear el token:', error);
  });
  
  const link = `${clientURL}:${puerto}/passwordReset?token=${resetToken}&id=${user.id}`;

  sendEmail(
    user.usuario,
    "Solicitud de restablecimiento de contraseña",
    {
      usuario: user.usuario,
      link: link,
    },
    "./template/requestResetPassword.handlebars"
  );
  return { link };
};

const findUsuarioPorId = (id,onSuccess) => {
  return models.usuarios
    .findOne({ where: { id: id } })
    .then((usuarios) => (usuarios ? onSuccess(usuarios) : false));
};

export const resetPassword = async (userId, token, password) => {
  let passwordResetToken = await findToken(userId);
   
  if (!passwordResetToken) {
    throw new Error("Token de restablecimiento de contraseña no válido o caducado");
  }

  console.log(passwordResetToken.token, token);

  const isValid = await bcrypt.compare(token, passwordResetToken.token);

  if (!isValid) {
    throw new Error("Token de restablecimiento de contraseña no válido o caducado");
  }

  const hashPassword = await bcrypt.hash(password, Number(bcryptSalt));

  // Cambiar esto
  /* 
  await User.updateOne(
    { id: userId },
    { $set: { password: hash } },
    { new: true }
  );
  */

  const onSuccess = (usuario) =>
  usuario
  .update({
    password: hashPassword,
  }).then(() => {
      return ({
        sendStatus:200
      })
      }
    )
  .catch((error) => {
    if (error == "SequelizeUniqueConstraintError: Validation error") {
      return({
        status:400,
        mensaje :("Bad request: Algun tipo de error de validacion de campos")
      });
       
    } else {
      return(
        `Error al intentar actualizar la base de datos: ${error}`
      );
    }
  });
  const user = findUsuarioPorId(userId, onSuccess);

  sendEmail(
    user.usuario,
    "Password Reset Successfully",
    {
      usuario: user.usuario,
    },
    "./template/resetPassword.handlebars"
  );

  await passwordResetToken.destroy();

  return { message: "El restablecimiento de contraseña fue exitoso" };
};

