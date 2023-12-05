import { Request, Response, NextFunction } from "express";

import { Board } from "../models/board";

export const postAddBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file) return res.status(400).send("파일 전송 실패");
  const title = req.body.title;
  const content = req.body.content;
  const image = req.file as Express.MulterS3.File;
  const imageUrl = image.location;
  
  const board = new Board({
    title,
    content,
    imageUrl,
  });

  board
    .save()
    .then(() => {
      console.log("Create board");
      res.status(200).send("db 저장 성공");
    })
    .catch((err: Error) => res.status(400).send("db 저장 실패"));
};

export const getBoard = async (
  req: Request<{ page: string }>,
  res: Response,
  next: NextFunction
) => {
  const page = Number(req.params.page);
  const limit = 12;
  Board.find({}, { title: 1, content: 1, imageUrl: 1, _id: 0 })
    .sort({ _id: -1 })
    .limit(limit)
    .skip((page - 1) * limit)
    .exec()
    .then((posts) => {
      return res.status(200).send(posts);
    })
    .catch((err) => {
      return res.status(400).send("Can't read posts");
    });
};