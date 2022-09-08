import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const getOrders =  async () => {
  // obtenesmo todos los items
  const response = await ItemModel.find({});
  return response;
}



export { 
  getOrders,
};