
const mongoose = require('mongoose')


async function connctMongoDatabase(){
    await mongoose.connect('mongodb://localhost/taskdb')
}


module.exports = connctMongoDatabase;