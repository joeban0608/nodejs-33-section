import { Router } from "express";
const router = Router();

type Todo = {
  id: string;
  text: string;
};
const todoList: Todo[] = [];

router.get("/", (req, res, next) => {
  res.status(200).json({ todoList: todoList });
});

export default router;
