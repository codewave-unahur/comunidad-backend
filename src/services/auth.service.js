const JWT = require("jsonwebtoken");
const models = require("../../database/models");
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

//Esto abria que ver porque ya esta definada esta funcion en usuario, lo que si capaz se puede rescatar algo sino queda descartado...
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
      // me lo agrega con las password hasheada pero nose de donde lo saca... <.<
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
    '../../database/utils/template/requestResetPassword.handlebars'
  );
  return { link };
};


const findUsuarioPorId = async (id) => {
  try {
    const usuario = await models.usuarios.findOne({ where: { id } });
    return usuario;
  } catch (error) {
    console.error(`Error al buscar usuario por ID: ${error}`);
    throw error;
  }
};

export const resetPassword = async (userId, token, password) => {
  try {
    const passwordResetToken = await findToken(userId);

    if (!passwordResetToken) {
      throw new Error("Token de restablecimiento de contraseña no válido o caducado");
    }

    console.log(passwordResetToken.token, token);

    const isValid = await bcrypt.compare(token, passwordResetToken.token);

    if (!isValid) {
      throw new Error("Token de restablecimiento de contraseña no válido o caducado");
    }

    const hashPassword = await bcrypt.hash(password, Number(bcryptSalt));

    const usuario = await findUsuarioPorId(userId);

    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }

    await usuario.update({ password: hashPassword });

    console.log(`Contraseña actualizada para el usuario: ${usuario.usuario}`);

    await sendEmail(
      usuario.usuario,
      "Restablecimiento de contraseña exitoso",
      {
        usuario: usuario.usuario,
      },
      '../../database/utils/template/resetPassword.handlebars',
    );

    await passwordResetToken.destroy();

    return { message: "El restablecimiento de contraseña fue exitoso" };
  } catch (error) {
    console.error(`Error en resetPassword: ${error.message}`);
    throw error;
  }
};

