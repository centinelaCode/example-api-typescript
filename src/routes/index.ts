import { Router, Request, Response } from "express";
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

//limpiar el filename => remueve la extension de nombre: entra index.ts => index
const cleanFileName = (fileName:string) => {
  const file = fileName.split('.').shift();
  return file;
}

// lee todos los archivos que hay en src/routes, retornat  => index.ts y item.ts
readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if(cleanName !== 'index'){
    // importancion dinamica
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`Loading route...... ${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router);
    });

    // console.log(cleanName);
  }
});




export { router };