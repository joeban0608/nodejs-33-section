import { Router } from "express";
import { Todo } from "../models/todo";

const router = Router();

let todoList: Todo[] = [];

router.get("/", (req, res, next) => {
  res.status(200).json({ todoList: todoList });
});

router.post("/add-todo", (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };
  todoList.push(newTodo);
  return res.status(200).json({ message: "create todo", todoList: todoList });
});

router.put("/todo/:todoId", (req, res, next) => {
  const tid = req.params.todoId;
  const todoIndex = todoList.findIndex((todoItem) => todoItem.id === tid);
  if (todoIndex >= 0) {
    todoList[todoIndex] = {
      id: todoList[todoIndex].id,
      text: req.body.text,
    };
    return res
      .status(200)
      .json({ message: "Updated todo", todoList: todoList });
  }
  return res.status(404).json({ message: "Could not find todo for this id" });
});

router.delete("/todo/:todoId", (req, res, next) => {
  todoList = todoList.filter((todoItem) => todoItem.id !== req.params.todoId);

  return res.status(200).json({ message: "deleted todo", todoList: todoList });
});

export default router;
