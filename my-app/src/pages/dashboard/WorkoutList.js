import React from "react";
import Workout from "./Workout";
import { Component } from "react";
import LineChart from "react-linechart";
import "../../../node_modules/react-linechart/dist/styles.css";
// import { TimeSeries } from "pondjs";
// import {
//   Charts,
//   ChartContainer,
//   ChartRow,
//   YAxis,
//   LineChart,
//   Baseline,
// } from "react-timeseries-charts";
/* App.js */
// import { Component } from "react";
import CanvasJSReact from "./../../assets/canvasjs-3.7.5/canvasjs.react";
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class WorkoutList extends Component {
  render() {
    const data = [
      {
        color: "steelblue",
        points: [
          { x: 1, y: 2 },
          { x: 3, y: 5 },
          { x: 7, y: -3 },
        ],
      },
    ];
    const workouts = ["Workout 1", "Workout 2", "Workout 3"];

    return (
      <div className="dashboard">
        <div className="workout-management">
          <div className="newWorkout">
            <h2 className="filesHeader" id="tm">
              Past Workouts
            </h2>
          </div>
          <div className="oldWorkouts">
            <h2 className="filesHeader">Recorded Workouts</h2>
            <div className="workoutContainer">
              {workouts === undefined ? (
                <p className="inactive">No workouts have been recorded</p>
              ) : (
                workouts.map((workout) => (
                  <Workout key={workout} name={workout} />
                ))
              )}
            </div>
          </div>
        </div>
        <div>
            <div className="App">
                <p>My First LineChart</p>
                <LineChart 
                    width={600}
                    height={400}
                    data={data}
                    xLabel="Time"
                    yLabel="BPM"
                />
            </div>				
        </div>
      </div>
    );
  }
}
// module.exports = WorkoutList;
// export default WorkoutList;
// import React, { Component } from 'react';
// import LineChart from 'react-linechart';
// import '../../../node_modules/react-linechart/dist/styles.css';

// export default class WorkoutList extends Component {
// 	render() {
// const data = [
// 	{
// 		color: "steelblue",
// 		points: [
//             {x: 1, y: 2},
//             {x: 3, y: 5},
//             {x: 7, y: -3}]
// 	}
// ];
// 		return (
// 			<div>
// 				<div className="App">
// 					<p>My First LineChart</p>
// 					<LineChart
// 						width={600}
// 						height={400}
// 						data={data}
// 					/>
// 				</div>
// 			</div>
// 		);
// 	}
// }
