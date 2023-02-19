import serial
from serial import Serial, SerialException
import mysql.connector
import numpy as np
from datetime import datetime
from matplotlib import pyplot as plt

start=True

try:
    SObj = Serial('COM7', 9600, timeout=1)
    
except SerialException as var: 
    print('An Exception Occured')
    print('Exception Details-> ', var)
    
else:
    print('Serial Port Opened')

#heartbeats = [0, 0, 0, 0, 0]
heartbeats = []
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

bpm_data = []

while(start):
    try:
        ReceivedString = SObj.readline()
        temp = ReceivedString.decode('UTF-8')
        if(temp != 'DEAD'):
            temp = temp[:-2]
            now = datetime.now()
            
            mean = int(float(temp))
            bt = str(now.hour) +":" + str(now.minute) + ":" + str(now.second)
            x = str(int(mean))

            bpm_data.append(int(x))
            
            mycursor = mydb.cursor()
            
            pop_client = 'INSERT INTO tbl_heartbeat(userid, wid, beattime, bpm) VALUES(1, 1, \'' + bt + '\', \'' +  x + '\');'            
            
            mycursor.execute(pop_client)
            mydb.commit()
            print(x)
        else:
            print('User Stoped')
            start=False
    except KeyboardInterrupt:
        break

SObj.close()


def CMA(v):
  i = 1
  moving_averages = []
  cum_sum = np.cumsum(v);
  while i <= len(v):
      window_average = round(cum_sum[i-1] / i, 2)
      moving_averages.append(window_average)
      i += 1
  return moving_averages


CMA_values = CMA(bpm_data)
	
x_data = np.linspace(0, len(CMA_values), len(CMA_values))

plt.plot(x_data[100:], CMA_values[100:], label='Moving Average')
#plt.plot(x_data[100:], bpm_data[100:], label="Data")
plt.legend()
plt.grid()
plt.ylim(40, 120)
plt.show()
#plt.savefig("perfection.png")
