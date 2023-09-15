const JWT = require("jsonwebtoken");
const User = require("../../database/models/usuarios.js");
const Token = require("../../database/models/tokens.js");
const sendEmail = require("../../database/utils/sendEmail.js");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const JWTSecret = process.env.SECRET;
const bcryptSalt = process.env.BCRYPT_SALT;
const clientURL = process.env.CLIENT_URL;
const puerto = process.env.PORT;

const signup = async (data) => {
    // el usuario es el email..
  let user = await User.findOne({ usuario: data.usuario });
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

const requestPasswordReset = async (usuario) => {
  const user = await User.findOne({ usuario });
  if (!user) throw new Error("Email does not exist");

  let token = await Token.findOne({ userId: user.id });
  if (token) await token.deleteOne();

  let resetToken = crypto.randomBytes(32).toString("hex");
  const hash = await bcrypt.hash(resetToken, Number(bcryptSalt));

  await new Token({
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

const resetPassword = async (userId, token, password) => {
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

module.exports = {
  signup,
  requestPasswordReset,
  resetPassword,
};