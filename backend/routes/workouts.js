const express=require('express')

const router= express.Router()

// get all workout
router.get('/', (req,res)=>{
    res.json({mssg: "GET all workouts"})
})

//get single workout
router.get('/', (req,res)=>{
    res.json({mssg: "GET all workouts"})
})

 
// POST a new workout
router.post('/', (req,res)=>{
    res.json({mssg: "POST a new workout"})
})

// DELETE a workout
router.delete('/:id', (req,res)=>{
    res.json({mssg: "DELETE a workout"})
})

// UPDATE a workout
router.patch('/:id', (req,res)=>{
    res.json({mssg: "update a workout"})
})

module.exports=router