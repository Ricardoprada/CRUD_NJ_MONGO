//@ts-check

import { Router } from "express";
import { renderTask, createTask, renderTaskEdit, editTask, deleteTask, taskToggleDone } from '../controllers/task.controller';

const router = Router();

router.get("/", renderTask);

router.post('/task/add', createTask);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

router.get("/tasks/:id/toggleDone", taskToggleDone);

export default router;