const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    date:{
       type:String
    },
    title:{
        type:String,
        required:[true,"task name is required"]
    },
    description:{
        type:String
    },
    status:{
        type:Boolean,
        default:false
    }
})


const Task = mongoose.model('task',taskSchema)
module.exports = Task;