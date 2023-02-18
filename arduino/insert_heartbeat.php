<?php

if(isset($_GET["beattime"])){
    $beattime = $_GET["beattime"];
    $uid = $_GET["uid"];
    $wid = $_GET["wid"];
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

    $sql = "INSERT INTO tbl_heartbeatReadings (beattime, userid, wid) VALUES ($beattime, $uid, $wid)";
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