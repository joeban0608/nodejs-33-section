"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todoList = [];
router.get("/", (req, res, next) => {
    res.status(200).json({ todoList: todoList });
});
router.post("/add-todo", (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todoList.push(newTodo);
    return res.status(200).json({ message: "create todo", todoList: todoList });
});
router.put("/todo/:todoId", (req, res, next) => {
    const params = req.params;
    const body = req.body;
    const tid = params.todoId;
    const todoIndex = todoList.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex >= 0) {
        todoList[todoIndex] = {
            id: todoList[todoIndex].id,
            text: body.text,
        };
        return res
            .status(200)
            .json({ message: "Updated todo", todoList: todoList });
    }
    return res.status(404).json({ message: "Could not find todo for this id" });
});
router.delete("/todo/:todoId", (req, res, next) => {
    const params = req.params;
    todoList = todoList.filter((todoItem) => todoItem.id !== params.todoId);
    return res.status(200).json({ message: "deleted todo", todoList: todoList });
});
exports.default = router;
