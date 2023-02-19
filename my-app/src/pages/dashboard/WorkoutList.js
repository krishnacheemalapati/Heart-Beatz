import React from 'react'
import Workout from './Workout';
import { TimeSeries } from "pondjs";
import {
    Charts,
    ChartContainer,
    ChartRow,
    YAxis,
    LineChart,
    Baseline,
    Resizable
} from "react-timeseries-charts";
export default function WorkoutList() {
    
    // Figure out how to get stuff from the database
    const workouts = []
    const series = new TimeSeries({
        name: "Heart Rate",
        columns: ["time", "value"],
        workouts
    });

    const style = {
        value: {
            stroke: "#a02c2c",
            opacity: 0.2
        }
    };

    const baselineStyle = {
        line: {
            stroke: "steelblue",
            strokeWidth: 1,
            opacity: 0.4,
            strokeDasharray: "none"
        },
        label: {
            fill: "steelblue"
        }
    };
    
    const baselineStyleLite = {
        line: {
            stroke: "steelblue",
            strokeWidth: 1,
            opacity: 0.5
        },
        label: {
            fill: "steelblue"
        }
    };

    return(
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
        <ChartContainer timeRange={series.range()} format="%b '%y">
        <ChartRow height="150">
            <YAxis
                id="price"
                label="Price ($)"
                min={series.min()} max={series.max()}
                width="60" format="$,.2f"/>
            <Charts>
                <LineChart axis="price" series={series} style={style}/>
                <Baseline axis="price" style={baselineStyleLite} value={series.max()} label="Max" position="right"/>
                <Baseline axis="price" style={baselineStyleLite} value={series.min()} label="Min" position="right"/>
                <Baseline axis="price" style={baselineStyleLite} value={series.avg() - series.stdev()}/>
                <Baseline axis="price" style={baselineStyleLite} value={series.avg() + series.stdev()}/>
                <Baseline axis="price" style={baselineStyle} value={series.avg()} label="Avg"/>
            </Charts>
        </ChartRow>
    </ChartContainer>
    </div>
    );
}