const express = require('express')
const db = require('./db')


const app = express()
app.use(express.json())

const cors = require ("cors")
app.use(cors())

//routes de users
const UsersRoute =require('./routes/RouteUsers')
app.use("/users",UsersRoute)

//routes de admin
const AdminRoute =require('./routes/RouteAdmin')
app.use("/admin",AdminRoute)

//routes de Micaniciens
const MicaniciensRoute =require('./routes/RouteMicaniciens')
app.use("/Micaniciens",MicaniciensRoute)

//routes de Service
const ServiceRoute =require('./routes/RouteService')
app.use("/Service",ServiceRoute)

//routes de Voiture
const ZizaRoute =require('./routes/RouteZiza')
app.use("/Ziza",ZizaRoute)

//routes de Revenus
const RevenusRoute =require('./routes/RouteRevenus')
app.use("/Revenus",RevenusRoute)

app.listen(  8000,()=>{
    console.log('Server is running on port 8000')
})
