import express from "express";
import todoRouter from "./routes/todo";

const app = express();

app.use(todoRouter);

app.listen(3000);
