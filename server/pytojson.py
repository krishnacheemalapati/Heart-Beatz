import mysql.connector as sql

import pandas as pd
db_connection = sql.connect(host='localhost', port= '3306', database='workouts', user='user', password='pass')
db_cursor = db_connection.cursor()
db_cursor.execute('SELECT * FROM tbl_heartbeat')
table_rows = db_cursor.fetchall()

df = pd.DataFrame(table_rows, columns=['userid', 'wid', 'beattime', 'bpm', 'hid'])


cols_to_drop = []
for i in cols_to_drop:
    df.drop(columns=[i])

df.to_json("dfjson")