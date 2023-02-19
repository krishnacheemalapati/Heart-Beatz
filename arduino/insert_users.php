<?php

if(isset($_GET["username"])){
    $uname = $_GET["username"];
    $pw = $_GET["pw"];
    $uid = $_GET["uid"];
    $servername = "localhost";
    $username = "heartbeatz";
    $password = "heartbeatz.tech";
    $database_name = "workouts";
    // Create MySQL connection fom PHP to MySQL server
    $connection = new mysqli($servername, $username, $password, $database_name);
    // Check connection
    if ($connection->connect_error) {
        die("MySQL connection failed: " . $connection->connect_error);
    }

    $sql = "INSERT INTO tbl_heartbeatReadings (username, userid, pw) VALUES ($uname, $uid, $pw)";
    if ($connection->query($sql) === TRUE) {
        echo "New record created successfully";
     } else {
        echo "Error: " . $sql . " => " . $connection->error;
     }
  
     $connection->close();
  } else {
     echo "heartbeat is not set in the HTTP request";
  }
  ?>
}