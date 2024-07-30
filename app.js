const express = require('express')
const db = require('./db')
const userRouter = require('./routes/userRouter')

const app = express()

app.use('/test',userRouter)

app.listen(8000,()=>{
    console.log('Server is running on port 8000')
})
