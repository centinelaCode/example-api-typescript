import { User } from "../interfaces/user.Interface";
import { Auth } from "../interfaces/auth.interface";
import UserModel from "../models/user";

const registerNewUser = async ({email, password, name}: User) => {

  const checkIs = await UserModel.findOne({email: email});
  if (checkIs) return "ALREDY_USER"
  
  // const { email, password, name, description } = authUser;
  const registerNewUser = await UserModel.create({email, password, name});
  return registerNewUser;

}

const loginUser = async() => {

}

export {
  registerNewUser,
  loginUser,
}