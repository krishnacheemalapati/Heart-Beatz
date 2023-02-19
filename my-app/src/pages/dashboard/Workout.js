import React from 'react'
import {useQuery} from 'react-query'
import mysql from "mysql";
import axios from 'axios';

export default function Workout(props) {
    // Figure out how to get stuff from the database
    const res = [];
    const visualizeData = () => {
        props.setChart({ show: true, intents: res.data });
        // Function to generate visualizations
    }
    const workoutName = props.workoutName;

    
    var printlist = JSON.parse()
    // const db = mysql.createConnection({
    //     host: "localhost",
    //     user: "heartbeatz",
    //     password: "heartbeatz",
    //     database: "heartbeatRatings"
    // });

    // db.query("SELECT * FROM users WHERE userid=? AND wid=?", 
    //     [1, 1], (err, res)=>{
    //         if (err){
    //             console.error(err)
    //         }
    //         else{
    //             console.log(res)
    //         }
    //     }
    // )
    
    return (
        <div className='single-workout'>
            <button onClick={visualizeData} className="workout button">{workoutName}</button>
        </div>
    )
}