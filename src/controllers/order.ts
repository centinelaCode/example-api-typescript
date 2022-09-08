import {Request, Response} from 'express'
import { JwtPayload } from 'jsonwebtoken';
import { handleHttp } from '../utils/error.hendle'

interface RequestExt extends Request {
  user?: string | JwtPayload; 
}

// ! Obtener una lista de items
const getItems = (req:RequestExt, res:Response) => {
  try {    
    res.send({
      data: 'ESTO SOLO LO VEN CON SESION (JWT)',
      user: req.user,
    })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_BLOGS')
  }
}


export {
  getItems,
}