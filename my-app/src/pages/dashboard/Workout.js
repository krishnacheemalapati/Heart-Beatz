import React from 'react'

export default function Workout(props) {
    // Figure out how to get stuff from the database
    const res = [];
    const visualizeData = () => {
        props.setChart({ show: true, intents: res.data });
        // Function to generate visualizations
    }
    const workoutName = props.workoutName;

    return (
        <div className='single-workout'>
            <button onClick={visualizeData} className="workout button">{workoutName}</button>
        </div>
    )
}