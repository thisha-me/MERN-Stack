require('dotenv').config()

const express=require('express')
const workoutRoutes= require('./routes/workouts')

//express app
const app=express()

//use middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.get('/', (req,res)=>{
    res.json({mssg:'Welcome to the app'})
})

// routes
app.use('api/workout',workoutRoutes)

// listen request
app.listen(process.env.PORT, ()=>{
    console.log('listing on port',process.env.PORT)
})



process.env
