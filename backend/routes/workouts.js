const express=require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout
}=require('../controllers/workoutController')

const router= express.Router()

// get all workout
router.get('/',getWorkouts)

//get single workout
router.get('/:id', getWorkout)
 
// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', (req,res)=>{
    res.json({mssg: "DELETE a workout"})
})

// UPDATE a workout
router.patch('/:id', (req,res)=>{
    res.json({mssg: "UPDATE a workout"})
})

module.exports=router