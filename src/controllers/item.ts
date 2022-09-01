import {Request, Response} from 'express'
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
const postItem = (req:Request, res:Response) => {
  try {
    
  } catch (e) {
    handleHttp(res, 'ERROR_POST_ITEM')
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
  deleteItem

}