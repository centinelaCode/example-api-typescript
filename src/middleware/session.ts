import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from '../interfaces/req-ext.interface';


const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {

  try {

    // se obtiene el token del header
    const JWTByUser = req.headers.authorization || '';
    const jwt = JWTByUser.split(' ').pop()  // del array ['bearer', '11111'] obtenemos el 111111
    
    // ya obtenido el JWT verificamos si e sun JWT valido
    const isUser = verifyToken(`${jwt}`) as { id: string };
    console.log(isUser);

    // validamos si es falso el token no es valido
    if (!isUser) {
      res.status(401);
      res.send("NO_TIENES_UN_JWT_VALIDO");
    } else {
      // pasamos al siguiente middleware
      req.user = isUser;
      // console.log({ JWTByUser });
      next()
    }    
  } catch (e) {
    console.log(e)
    res.status(400);
    res.send('SESSION_NO_VALID');
  }

}

export { checkJWT };