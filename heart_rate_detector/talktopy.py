import serial
from serial import Serial, SerialException
import mysql.connector
import numpy as np
from datetime import datetime

start=True

try:
    SObj = Serial('COM7', 9600, timeout=1)
    
except SerialException as var: 
    print('An Exception Occured')
    print('Exception Details-> ', var)
    
else:
    print('Serial Port Opened')

heartbeats = [0, 0, 0, 0, 0]
beatcount = 0

line = SObj.readline()

#if line == "ALIVE":
    #start=True

mydb = mysql.connector.connect(
  host="localhost",
  user="user",
  password="pass",
  database="workouts"
)

while(start):
    try:
        ReceivedString = SObj.readline()
        temp = ReceivedString.decode('UTF-8')
        if(temp != 'DEAD'):
            temp = temp[:-2]
            now = datetime.now()
            
            heartbeats[beatcount] = int(float(temp))
            beatcount+=1
            if (beatcount >= 5):
                beatcount = 0
            
            mean = np.mean(heartbeats)
            bt = str(now.hour) +":" + str(now.minute) + ":" + str(now.second)
            x = str(int(mean))
            
            mycursor = mydb.cursor()
            
            pop_client = 'INSERT INTO tbl_heartbeat(userid, wid, beattime, bpm) VALUES(1, 1, \'' + bt + '\', \'' +  x + '\');'            
            
            mycursor.execute(pop_client)
            mydb.commit()
            #print(pop_client)
        else:
            print('User Stoped')
            start=False
    except KeyboardInterrupt:
        break

SObj.close()
