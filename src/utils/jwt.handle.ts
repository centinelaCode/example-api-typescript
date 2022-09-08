import { sign, verify } from 'jsonwebtoken';

//obtenemos el jsw_secret de la svariables de entorno
const jwtSecret = process.env.JWT_SECRET || "token.01010101";

// el payload que s ele va pasar va ser el user id
const generateToken = async (id: string) => {
  const jwt = sign({ id }, jwtSecret, {
    expiresIn: "2h"
  });
  return jwt;
}




const verifyToken = (jwt: string) => {
  const isjwtOK = verify(jwt, jwtSecret);
  return isjwtOK;
}
  

export {
  generateToken,
  verifyToken,
}