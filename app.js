const express = require('express')
const db = require('./db')


const app = express()
app.use(express.json())

const cors = require ("cors")
app.use(cors())

//routes de users
const UsersRoute =require('./routes/RouteUsers')
app.use("/users",UsersRoute)


///test1 github

app.listen(  8000,()=>{
    console.log('Server is running on port 8000')
})
