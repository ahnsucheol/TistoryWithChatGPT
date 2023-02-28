import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});
