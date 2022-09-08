import { Router, Request, Response } from "express";
import { getItems } from "../controllers/order";
import { checkJWT } from "../middleware/session";

const router = Router();

/**
 * ! Esta Ruta solo puede acceder las personas que tiene sesion activa (tener un jwt valido)
 * ?
 *  https://localhost:3002/blogs [GET]
 */
router.get("/",checkJWT, getItems);


export { router };