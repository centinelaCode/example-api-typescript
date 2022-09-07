import { Request, Response } from 'express'
import { registerNewUser, loginUser} from '../services/auth'

const registrerController = async ({body}: Request, res:Response) => {
  const reponseUser  = await registerNewUser(body);
  res.send(reponseUser);
}


const loginController = async (req: Request, res:Response) => {
  
}


export {
  registrerController,
  loginController,
}