import { Router, Request, Response } from "express";
import { loginController, registrerController } from "../controllers/auth";


const router = Router();

/**
 * ?
 /*   https://localhost:3002/auth/registrer | /login [POST]
 */
router.post('/register', registrerController);
router.post('/login', loginController);


export { router };
