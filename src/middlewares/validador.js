const { auth } = require('express-oauth2-jwt-bearer');
export const validator =  auth({
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  audience: process.env.AUDIENCE,
  tokenSigningAlg: 'HS256',
  secret: process.env.SECRET
});
