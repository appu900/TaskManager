const express = require('express')
const connctMongoDatabase = require('./config/databaseconfig')
const taskRouter = require('./routes/taskroute')
const cors = require('cors')
const app = express();


app.use(express.json())
app.use(cors())
app.use(taskRouter)

app.listen(5000,async()=>{
    console.log("app is live")
    await connctMongoDatabase();
    console.log("database connected")
})