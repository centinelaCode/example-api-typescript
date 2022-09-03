import { Car } from "../interfaces/interfaces";
import ItemModel from "../models/item";

const insertCar = async (item: Car) => {
  // insertamos en la db y la retornamos
  const response = await ItemModel.create(item)
  return response;
}

const getCars =  async () => {
  // obtenesmo todos los items
  const response = await ItemModel.find({});
  return response;
}

const getCar =  async (id:string) => {
  // obtenesmo todos los items
  const response = await ItemModel.findOne({_id: id});
  return response;
}

export { 
  insertCar,
  getCars,
  getCar,
};