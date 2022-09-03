import {Request, Response} from 'express'
import { insertCar, getCars, getCar, updateCar, deleteCar} from '../services/item'
import { handleHttp } from '../utils/error.hendle'

// ! Crear un item
const postItem = async({ body }:Request, res:Response) => {
  try {
    const response = await insertCar(body);    
    res.send(response);    
  } catch (e) {
    handleHttp(res, 'ERROR_POST_ITEM', e);
  }
}

// ! Obtener una lista de items
const getItems = async(req:Request, res:Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}

// ! Obtener un item
const getItem = async ({ params }:Request, res:Response) => {
  try {
    const { id } = params;
    const response =  await getCar(id);
    const data = response ? response : 'NOT_FOUND';
    res.json({message: data});    
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM', e)
  }
}


// ! Actualizar un item
const updateItem = async ({body, params}:Request, res:Response) => {
  try {
    const {id} = params;
    const response = await updateCar(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}

// ! Eliminar un item
const deleteItem = async ({params}:Request, res:Response) => {
  try {
    const { id } = params;
    const response = await deleteCar(id)
    res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}

export {
  getItem,
  getItems,
  postItem,
  updateItem,
  deleteItem,
}