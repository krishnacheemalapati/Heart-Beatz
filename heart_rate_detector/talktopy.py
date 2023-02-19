from serial import Serial, SerialException
import mysql.connector
from mysql.connector import (connection)
import numpy as np

mydb = mysql.connector.connect(
  host="100.67.31.128",
  user="user",
  password="pass"
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

while(True):
    try:
        ReceivedString = SObj.readline()
        if(ReceivedString != 'END'):
            heatbeats[beatcount] = int(ReceivedString)
            if (beatcount >= 5):
                beatcount = 0
            
            mean = np.mean(heatbeats)
            pop_client = "INSERT INTO tbl_heartbeat VALUES(1, 1, " + str(int(mean)) + ");"            
            
            mycursor = mydb.cursor()
            mycursor.execute(pop_client)
            mydb.commit()

        else:
            print('User Stoped')
            break
    except KeyboardInterrupt:
        break

SObj.close()
