
const TaskRepository = require('../Repository/taskRepository')


exports.createTask = async(request,response) =>{

   try {

    const{title,description,date} = request.body;
    if(title == '') throw new Error("task name is required")
    const taskRepo = new TaskRepository();
    const task = await taskRepo.createTask(request.body);
    response.status(200).json({message:"task created",data:task})
  
   } catch (error) {
      response.status(400).json({
        message:error.message
      })
   }

}


exports.getAllTaskByDate = async(request,response) =>{


    try {

        const date = new Date()
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`
        console.log(currentDate)
    
        const taskRepo = new TaskRepository();
        const allTasks = await taskRepo.getTasksByDate(currentDate)
        console.log(allTasks)
        
        response.status(200).json({
            allTasks
        })
        
    } catch (error) {
        response.status(400).json()
    }

  


}


exports.updateTaskStatus = async(request,response) =>{

    const taskRepo = new TaskRepository();
    try {
        
        console.log(request.params.id)
        const updatedTask = await taskRepo.updateTaskStatus(request.params.id)
        return response.status(200).json({
            message:'task updates sucessfully',
            task:updatedTask
        })
        
    } catch (error) {
        response.status(400).json({
            error:error.message
        })
    }
}


exports.shiftTask = async(request,response) =>{
    const taskRepo = new TaskRepository();
    try {
        
        const updatedTask = await taskRepo.shiftTask(request.params.id,request.body.date)
        return response.status(200).json({
            message:'task updates sucessfully',
            task:updatedTask
        })
        
    } catch (error) {
        response.status(400).json({
            error:error.message
        })
    }
}


exports.getAllTaskOfNextDay = async(request,response) =>{

    const taskRepo = new TaskRepository();
    try {


        const tasks = await taskRepo.getALlTaskFromTomorrow();
        return response.status(200).json({
            tasks
        })

      
        
    } catch (error) {
        return response.status(400).json({
            message:error.message
        })
    }
}


exports.mostRecentHistory =  async(request,response) =>{
    const taskRepo = new TaskRepository();
    try {

        const tasks = await taskRepo.getMostRecentTasks();
        return response.status(200).json({
            tasks
        })
        
    } catch (error) {
        return response.status(400).json({
            message:error.message
        })
    }
}


exports.getAllTasks = async(request,response) =>{
    const taskRepo = new TaskRepository();
    try {

        const tasks = await taskRepo.getAllTasks();
        return response.status(200).json({
            tasks
        })
        
    } catch (error) {
        return response.status(400).json({
            message:error.message
        })
    }
}
