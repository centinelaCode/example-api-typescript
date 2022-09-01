import {Request, Response} from 'express'
import { handleHttp } from '../utils/error.hendle'

// ! Obtener un item
const getItem = (req:Request, res:Response) => {
  try {
    
  } catch (e) {
    handleHttp(res, 'ERROR_GET_BLOG')
  }
}

// ! Obtener una lista de items
const getItems = (req:Request, res:Response) => {
  try {
    
  } catch (e) {
    handleHttp(res, 'ERROR_GET_BLOGS')
  }
}

// ! Crear un item
const postItem = ({ body }:Request, res:Response) => {
  try {
    res.send(body)
    
  } catch (e) {
    handleHttp(res, 'ERROR_POST_BLOG')
  }
}

// ! Actualizar un item
const updateItem = (req:Request, res:Response) => {
  try {
    
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_BLOG')
  }
}

// ! Eliminar un item
const deleteItem = (req:Request, res:Response) => {
  try {
    
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_BLOG')
  }
}

export {
  getItem,
  getItems,
  postItem,
  updateItem,
  deleteItem

}