import express, { Request, Response } from "express";

const router = express.Router();

router.get("/test", (req: Request, res: Response) => {
  res.send("Api Working");
});

export default router;
