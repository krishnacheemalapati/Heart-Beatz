import mysql.connector
import numpy as np
import pandas as pd

mydb = mysql.connector.connect(
  host="localhost",
  user="heartbeatz",
  password="heartbeatz",
  database="workouts"
)

sql_query = pd.read_sql("SELECT * FROM tbl_heartbeat", mydb)

df = pd.DataFrame(sql_query, columns = ['userid', 'wid', 'beattime', 'bpm'])

df.to_json('jsonfile')
