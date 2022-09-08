import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.Interface";
import UserModel from "../models/user";
import {encrypt, verified} from '../utils/bcrypt.handle'
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({email, password, name}: User) => {
  const checkIs = await UserModel.findOne({email: email});
  if (checkIs) return "ALREDY_USER"
  
  // encryptamos el password
  const passHash = await encrypt(password)

  // const { email, password, name, description } = authUser;
  const registerNewUser = await UserModel.create({email, password: passHash, name});
  return registerNewUser;
}



const loginUser = async({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({email: email});
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.password;  // TODO password encriptado
  const isCorrect = await verified(password, passwordHash);

  // si no hace math la contraseña retronamos un mensaje
  if(!isCorrect) return "PASSWORD_INCORRECT";

  // se genera el token
  const token = await generateToken(checkIs.id)
  console.log(token)

  // Si hace match la contraseña retornamos un objeto
  const data = {
    token,
    user: checkIs,
  }

  return data;
}

export {
  registerNewUser,
  loginUser,
}