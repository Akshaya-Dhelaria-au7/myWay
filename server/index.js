const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const PORT = process.env.PORT || 8000
const databaseConnection = require('./config/database_connection')
const userRouter = require('./routes/user_routes')
// const todoRouter = require('./routes/todo_routes')

dotenv.config({
    path:"./config/configure.env"
})

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use('/api/user' , userRouter)
// app.use('/api/todo' , todoRouter)

app.listen(PORT,() => {
    console.log(`Listening to port ${PORT}`)
})

module.exports = app