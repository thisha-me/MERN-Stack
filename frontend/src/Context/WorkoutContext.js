import { createContext, useReducer } from "react"

export const WorkoutsContext=createContext()

export const WorkoutsContextProvider= ({children})=>{
    const [state,dispatch]=useReducer(workoutReducer,{
        workouts:null
    })

    return(
        <WorkoutsContext.Provider value={}>
            {children}
        </WorkoutsContext.Provider>
    )
}
