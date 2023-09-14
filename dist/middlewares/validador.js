"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateToken = void 0;

const jwt = require('jsonwebtoken');

require('dotenv').config('../../.env');

const secret = process.env.SECRET;

const validateToken = (req, res, next) => {
  const accessToken = req.query.authorization;

  if (!accessToken) {
    return res.status(401).send('Acceso denegado: Falta token de autorización');
  }

  jwt.verify(accessToken, secret, (err, user) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).send('Acceso denegado: Token expirado');
      }

      return res.status(401).send('Acceso denegado: Token no válido');
    }

    req.user = user;
    next();
  });
};

exports.validateToken = validateToken;
//# sourceMappingURL=validador.js.map