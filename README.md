#Heart-beatz
## Inspiration
Finding the perfect playlist to accompany a workout has always been a time consuming task. You have to get songs that move at just the right pace, have the optimal vibes to keep you motivated, and so much more holds you back from enjoying your workout. However, that changes now, with HeartBeatz.

## Tracks for competition
*Most Useless Hack
*Best Health Hack
*From Silicon to Software 
*Best Overall

## What it does
We play songs customized to the user's current heart rate, and encourage them to maintain their pace by keeping up with the beat. Users can log their heartrate data from workouts along with the songs played and review them later using our website. 

## How we built it: 
An Arduino unit lies at the core of our hardware stack. This piece of circuitry reads input from a heart rate sensor, calculates a moving average over the most recent heartbeat readings to determine the user's BPM, and then writes this information to a MySQL database. Then, our React web application reads the heart rate information stored in the table and generates visualizations depicting the user's heart rate over the course of the workout. 

## Challenges we ran into: 
Everything.
Literally everything. 
From computer crashes to hardware failures to github disasters and everything in between, trust us, we've had it happen to us. 
On top of that, our team as a whole was relatively inexperienced; we hadn't worked with MySQL before, haven't programmed in C++, have minimal web development experience (especially when it comes to backend development), and so much more stood in our way. 
And yet, we made it through it all. Because what we lack in experience, we make up for in camaraderie 💙.  

## Accomplishments that we're proud of
Using hardware and actually making something functional at a Makeathon. We went from having 0 experience using an Arduino to being able to store heart rate data in a mySQL database and refer to this information in our full stack web application. 

## What we learned
We learned that a whole lot more is possible with hardware than we thought. That little components like Arduinos pack a huge punch. And that the future of micro circuitry holds infinite possibilities.

## What's next for Heart-beatz
We hope to 3D print a casing for the unit and connect to a MySQL database hosted on the cloud so that the user can log heart rate data during their workout and then review it later, instead of having to jog in place while adjacent to their computer. Ideally, we would utilize Bluetooth modules and develop a cross-platform mobile application that can sync up data on the device and on the database in real-time, provide geolocation data, and allow us to perform additional statistical analyses so that the user can further track and enhance their workouts. 
