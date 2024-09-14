const express = require("express");
const { getAllTask, addTask, updateTask, deleteTask } = require("../controller/controller");
const router = express.Router();

router.get("/task",  getAllTask);
router.post("/task", addTask);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

module.exports = router;
