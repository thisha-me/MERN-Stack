const express=require('express')
const Workout=require('../models/Workouts')

const router= express.Router()

// get all workout
router.get('/', (req,res)=>{
    res.json({mssg: "GET all workouts"})
})

//get single workout
router.get('/:id', (req,res)=>{
    res.json({mssg: "GET a single workouts"})
})
 
// POST a new workout
router.post('/', async (req,res)=>{
    const {title,load,reps}=req.body

    try{
        const workout=await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
    // res.json({mssg: "POST a new workout"})
})

// DELETE a workout
router.delete('/:id', (req,res)=>{
    res.json({mssg: "DELETE a workout"})
})

// UPDATE a workout
router.patch('/:id', (req,res)=>{
    res.json({mssg: "UPDATE a workout"})
})

module.exports=router