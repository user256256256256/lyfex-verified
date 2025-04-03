<?php

// Copyright (c) 2024 Lyfex Africa. All rights reserved.
// This website is licensed under the Lyfex Africa terms of use. Unauthorized copying or distribution is prohibited.
// Author: Engineer Ibn Muzamir.



// Database connection settings
$serverName = "medisaterp.lyfexafrica.com";  // Your database server address
$connectionOptions = array(
    "Database" => "medisatErpDB", // Database name
    "Uid" => "adminMedisatERP",        // Database username
    "PWD" => "Planchinobo256",         // Database password
    "TrustServerCertificate" => true   // Trust the server certificate
);

// Establishes the connection
$conn = sqlsrv_connect($serverName, $connectionOptions);

// Check if the connection was successful
if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}


// Close the connection
// sqlsrv_close($conn);
?>
