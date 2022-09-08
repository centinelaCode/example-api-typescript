import {Request, Response} from 'express'
import { JwtPayload } from 'jsonwebtoken';
import { RequestExt } from '../interfaces/req-ext.interface';
import { handleHttp } from '../utils/error.hendle'



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