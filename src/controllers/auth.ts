import { Request, Response } from 'express'
import { registerNewUser, loginUser} from '../services/auth'

const registrerController = async ({body}: Request, res:Response) => {
  const reponseUser  = await registerNewUser(body);
  res.send(reponseUser);
}


const loginController = async ({body}: Request, res:Response) => {
  const {email, password} = body;
  const reponseUser  = await loginUser( {email, password} );

  if(reponseUser === 'PASSWORD_INCORRECT'){
    res.status(403);
    res.send(reponseUser);
  } else {
    res.send(reponseUser);
  }

}


export {
  registrerController,
  loginController,
}