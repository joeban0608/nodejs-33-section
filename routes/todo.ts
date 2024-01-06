import { Router } from "express";
import { Todo } from "../models/todo";

const router = Router();

const todoList: Todo[] = [];

router.get("/", (req, res, next) => {
  res.status(200).json({ todoList: todoList });
});

router.post("/add-todo", (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };
  todoList.push(newTodo);
});

export default router;
