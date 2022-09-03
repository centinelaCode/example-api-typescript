import {Request, Response} from 'express'
import { insertItem } from '../services/item'
import { handleHttp } from '../utils/error.hendle'

// ! Obtener un item
const getItem = (req:Request, res:Response) => {
  try {
    
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}

// ! Obtener una lista de items
const getItems = (req:Request, res:Response) => {
  try {
    
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}

// ! Crear un item
const postItem = async({ body }:Request, res:Response) => {
  try {
    const responseItem = await insertItem(body)
    res.send(responseItem);
    
  } catch (e) {
    handleHttp(res, 'ERROR_POST_ITEM', e);
  }
}

// ! Actualizar un item
const updateItem = (req:Request, res:Response) => {
  try {
    
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}

// ! Eliminar un item
const deleteItem = (req:Request, res:Response) => {
  try {
    
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