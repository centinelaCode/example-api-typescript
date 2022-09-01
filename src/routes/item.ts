import { Router, Request, Response } from "express";

const router = Router();

/**
 * ?
 *  https://localhost:3002/items [GET]
 */
router.get('/', (req: Request, res: Response) => {
  res.send({data: 'endpoit: /item'})
})


export { router };