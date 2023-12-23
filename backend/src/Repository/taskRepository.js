const mongoose = require("mongoose");
const Task = require("../models/task");

class TaskRepository {

  async createTask(data) {
    try {
      const task = await Task.create(data);
      return task;
    } catch (error) {
      return error.message
    }
  }

  async getAllTasks() {
    try {
      const tasks = await Task.find();
      return tasks;
    } catch (error) {
      console.log(error);
    }
  }

  async updateTaskStatus(id) {
    try {
      const task = await Task.findById(id)
      task.status = true;
      const updatedTask = await task.save();
      return updatedTask;
  
    } catch (error) {
      console.log(error);
    }
  }

  async deleteTask(id){
    try {

        const task = await Task.findByIdAndDelete(id);
        return task;
        
    } catch (error) {
        console.log(error)
    }
  }

  async getTasksByDate(date){
    try {

      const tasks = await Task.find({date:date})
      return tasks;
      
    } catch (error) {
      console.log(error)
    }
  }


  async shiftTask(id,date){
     try {

        const task = await Task.findById(id);
        task.date = date;
        const updatedTask = await task.save();
        return updatedTask;
      
     } catch (error) {
       console.log(error.message)
     }
  }


  async getALlTaskFromTomorrow(){
    try {

      const date = new Date();
      let day = date.getDate()+1;
      let month = date.getMonth()+1;
      let year = date.getFullYear();
      let tomorrowDate = `${day}-${month}-${year}`
      const tasks = await Task.find({date:tomorrowDate})
      return tasks;
      
    } catch (error) {
      console.log(error)
    }
  }



  async getALLTasks(){
      return await Task.find();
  }

  async getMostRecentTasks(){
    return await Task.find().sort({$natural: -1}).limit(10)
  }

  


  
}

module.exports = TaskRepository;




// db.student.find().sort({$natural: -1}).limit(3)