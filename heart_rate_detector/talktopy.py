from serial import Serial, SerialException
import mysql.connector
from mysql.connector import (connection)
import numpy as np
from datetime import datetime

mydb = mysql.connector.connect(
  host="100.67.31.128",
  user="user",
  password="pass",
  database="workouts"
)



try:
    SObj = Serial('COM7',9600)
    
    
except SerialException as var : 
    print('An Exception Occured')
    print('Exception Details-> ', var)
    
else:
    print('Serial Port Opened')

heartbeats = [0, 0, 0, 0, 0]
beatcount = 0
beattime

while(True):
    try:
        ReceivedString = SObj.readline()
        if(ReceivedString != 'DEAD'):
            now = datetime.now()
            heatbeats[beatcount] = int(ReceivedString)
            if (beatcount >= 5):
                beatcount = 0
            
            mean = np.mean(heatbeats)
            beattime = str(now.hour) +":" + str(now.minute) + ":" + str(now.second)
            pop_client = "INSERT INTO tbl_heartbeat VALUES(1, 1, "+beattime+', '+ str(int(mean)) + ");"            
            
            mycursor = mydb.cursor()
            mycursor.execute(pop_client)
            mydb.commit()

        else:
            print('User Stoped')
            break
    except KeyboardInterrupt:
        break

SObj.close()
