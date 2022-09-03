import { Car } from "../interfaces/interfaces";
import ItemModel from "../models/item";

const insertItem = async (item: Car) => {
  // insertamos en la db y la retornamos
  const responseInsert = await ItemModel.create(item)
  return responseInsert;
}

export { insertItem };