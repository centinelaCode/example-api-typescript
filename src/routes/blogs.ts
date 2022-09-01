import { Router, Request, Response } from "express";

const router = Router();

/**
 * ?
 *  https://localhost:3002/blogs [GET]
 */
router.get("/", (req: Request, res: Response) => {
  res.send({data: 'endpoit: /blogs'})
})


export { router };