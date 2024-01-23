import jwt from 'jsonwebtoken';

const secret = process.env.SECRET;
const expireTime = process.env.EXPIRE;

export function generateAccessToken(usuario) {
    return jwt.sign({ uid: usuario }, secret, { expiresIn: expireTime });
}