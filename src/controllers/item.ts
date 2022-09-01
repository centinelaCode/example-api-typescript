import {Request, Response} from 'express'

// ! Obtener un item
const getItem = (req:Request, res:Response) => {
  try {
    
  } catch (e) {
    res.status(500);
    res.send('ERROR_GET_ITEM');
  }
}

// ! Obtener una lista de items
const getItems = (req:Request, res:Response) => {
  
}

// ! Crear un item
const postItem = (req:Request, res:Response) => {
  
}

// ! Actualizar un item
const updateItem = (req:Request, res:Response) => {
  
}

// ! Eliminar un item
const deleteItem = (req:Request, res:Response) => {
  
}

export {
  getItem,
  getItems,
  postItem,
  updateItem,
  deleteItem

}