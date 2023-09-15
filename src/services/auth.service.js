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


export const signup = async (data) => {
    // el usuario es el email..
  let user = await getUsuarioPorEmail({ usuario: data.usuario });
  if (user) {
    throw new Error("Email already exist", 422);
  }
  user = new User(data);
  const token = JWT.sign({ id: user.id }, JWTSecret);
  await user.save();

  return (data = {
    userId: user.id,
    usuario: user.usuario,
    token: token,
  });
};

const findUsuario = (email) => {
  return models.usuarios
    .findOne({ where: { usuario: email } })
    .then((usuario) => (usuario ? usuario : false));
};

const findToken = (id) => {
  console.log("asdasdsadsad");
  return models.tokens
    .findOne({ where: { userId: id } })
    .then((token) => (token ? token : false));
};

export const requestPasswordReset = async (usuario) => {
  const user = await findUsuario(usuario);
  if (!user) throw new Error("Email does not exist");
  
  let token = await findToken(user.id);
  console.log(token);
  console.log("asdasdsa");
  console.log(token);
  if (token) await token.destroy();
  console.log("ooooooooooooooooooo");
  let resetToken = crypto.randomBytes(32).toString("hex");
  const hash = await bcrypt.hash(resetToken, Number(bcryptSalt));
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa");
  await models.tokens.create({
    userId: user.id,
    token: hash,
    createdAt: Date.now(),
  }).save();

  const link = `${clientURL}:${puerto}/passwordReset?token=${resetToken}&id=${user._id}`;

  sendEmail(
    user.usuario,
    "Password Reset Request",
    {
      usuario: user.usuario,
      link: link,
    },
    "./template/requestResetPassword.handlebars"
  );
  return { link };
};

export const resetPassword = async (userId, token, password) => {
  let passwordResetToken = await Token.findOne({ userId });

  if (!passwordResetToken) {
    throw new Error("Invalid or expired password reset token");
  }

  console.log(passwordResetToken.token, token);

  const isValid = await bcrypt.compare(token, passwordResetToken.token);

  if (!isValid) {
    throw new Error("Invalid or expired password reset token");
  }

  const hash = await bcrypt.hash(password, Number(bcryptSalt));

  await User.updateOne(
    { id: userId },
    { $set: { password: hash } },
    { new: true }
  );

  const user = await User.findById({ id: userId });

  sendEmail(
    user.usuario,
    "Password Reset Successfully",
    {
      usuario: user.usuario,
    },
    "./template/resetPassword.handlebars"
  );

  await passwordResetToken.deleteOne();

  return { message: "Password reset was successful" };
};

