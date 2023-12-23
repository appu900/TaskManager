const { createTask, getAllTaskByDate, updateTaskStatus, shiftTask, getAllTaskOfNextDay, mostRecentHistory, getAllTasks } = require("../services/taskService");

const router = require("express").Router();


router
   .post('/task',createTask)
   .get('/task',getAllTaskByDate)
   .put('/task/:id',updateTaskStatus)
   .put('/task/shift/:id',shiftTask)
   .get('/task/nextday',getAllTaskOfNextDay)
   .get('/task/history',mostRecentHistory)
   .get('/task/all',getAllTasks)


module.exports = router;

