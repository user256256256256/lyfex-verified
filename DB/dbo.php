<!-- 
Copyright (c) 2024 Lyfex Africa. All rights reserved.
This website is licensed under the Lyfex Africa terms of use. Unauthorized copying or distribution is prohibited.
Author: Engineer Ibn Muzamir.
-->

<?php

// Database connection settings --Settings are leveraged during testing
$serverName = "DESKTOP-V3KV43E\\SQLEXPRESS";
$connectionOptions = array(
    "Database" => "lyfex_africa",
    "Uid" => "sa",
    "PWD" => "1234"
);

// Establishes the connection
$conn = sqlsrv_connect($serverName, $connectionOptions);

// Check if the connection was successful
if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}

echo json_encode(["success", "Connection successful!"]);

// Close the connection
// sqlsrv_close($conn);
