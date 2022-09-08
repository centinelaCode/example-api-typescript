import { Request, Response } from "express";
import dbConnect from '../config/mongo';
import { RequestExt } from '../interfaces/req-ext.interface';
import { Storage } from '../interfaces/storage.interface';
import { registerUpload } from '../services/storage';
import { handleHttp } from '../utils/error.hendle';

const getFile = async (req: RequestExt, res: Response) => {
  try {    
    const { user, file } = req;
    // console.log(user);
    console.log(file);
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    // res.send('AQUI_DEBE_LLEGAR_FILE');
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
}

export {
  getFile,
}



/*
?const { user, file } = req;

!file => del request tiene todas estas propiedades
{
  el name del input donde se sube el archivo
  *fieldname: 'myfile',

  el name original que tiene el file cuando lo subimos
  *originalname: 'code-sharing-websites-1280x720.jpg',

  el encodein
  *encoding: '7bit',

  el minetype el cual especifica el tipo de file (imagen, audio, word, excel, etc)
  *mimetype: 'image/jpeg',

  el destino donde se va almacenar en nel servidor
  *destination: '/home/centineladev/Documentos/pnodejs/leifermendez/api-rest-ts/storage',

  el nombre que s ele asigno en el servidor
  *filename: 'image-1662667574123.jpg',

  la ruta en donde se esta guardando el archivo en el servidor
  *path: '/home/centineladev/Documentos/pnodejs/leifermendez/api-rest-ts/storage/image-1662667574123.jpg',

  el peso en bytes del archivo
  *size: 20309
}

*/