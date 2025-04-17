<?php
// js config
// Copyright (c) 2024 Lyfex Africa. All rights reserved.
// This website is licensed under the Lyfex Africa terms of use. Unauthorized copying or distribution is prohibited.
// Author: Engineer Ibn Muzamir.

// Include the connection script
include('../DB/dbo.php');  // Adjust the path as necessary

header('Content-Type: application/json');

if (!empty($_POST)) {
    // Retrieve form data
    $clientFirstName = $_POST['clientFirstName'];
    $clientLastName = $_POST['clientLastName'];
    $clientEmail = $_POST['clientEmail'];
    $clientMobileContact = $_POST['clientMobileContact'];
    $clientAddress = $_POST['clientAddress'];
    $clientWhContact = $_POST['clientWhContact'] ?? '';
    $clientAge = $_POST['clientAge'];
    $clientScheduledTime = $_POST['clientScheduledTime'];
    $clientLeadLocation = $_POST['clientLeadLocation'] ?? '';
    $clientMessage = $_POST['clientMessage'];
    $privacyPolicy = $_POST['privacyPolicy'];

    // Validation
    if (empty($clientFirstName) || empty($clientLastName) || empty($clientEmail) || empty($clientMobileContact) || empty($clientAddress) || empty($clientAge) || empty($clientScheduledTime) || empty($clientMessage)) {
        echo json_encode(['error' => 'Fill in all fields!']);
        exit();
    }

    if ($privacyPolicy === 'false') {
        echo json_encode(['error' => 'Please verify privacy policies!']);
        exit();
    }

    if (!filter_var($clientEmail, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['error' => 'Invalid email address!']);
        exit();
    }

    if (!is_numeric($clientMobileContact) || strlen($clientMobileContact) !== 10) {
        echo json_encode(['error' => 'Invalid mobile number!']);
        exit();
    }

    if (!empty($clientWhContact) && !is_numeric($clientWhContact)) {
        echo json_encode(['error' => 'Invalid whatsapp number!']);
        exit();
    }

    $wordCount = str_word_count($clientMessage);
    if ($wordCount > 255) {
        echo json_encode(['error' => 'Use less than 255 words!']);
        exit();
    }

    // Prepare the SQL INSERT query with GUID
    $sql = "INSERT INTO [dbo].[OnlineApplicants]
                ([Id], [FirstName], [LastName], [Email], [MobilePhoneNo], [Address], [Age], [Reason], [PreferredSchedule], [HowDidYouHearAboutUs], [AcceptPrivacyPolicies], [CreatedDate])
            VALUES
                (NEWID(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, GETDATE())"; // NEWID() generates a new GUID for the Id field
    
    // Set the parameters for the query
    $params = array(
        $clientFirstName, 
        $clientLastName, 
        $clientEmail, 
        $clientMobileContact, 
        $clientAddress, 
        $clientAge, 
        $clientMessage, 
        $clientScheduledTime, 
        $clientLeadLocation, 
        ($privacyPolicy === 'true') ? 1 : 0  // Convert 'true'/'false' to bit (1 or 0)
    );

    // Prepare and execute the query
    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        die(print_r(sqlsrv_errors(), true));
    }

    // Send the success response
    echo json_encode(['success' => 'Application submitted successfully!']);

   // Send email notification
    $to = 'info@lyfexafrica.com';  // The email address of the admin
    $subject = "New Appointment";  // Simplified subject
    $message = "A new appointment has been requested. Here are the details:\n\n"
            . "First Name: $clientFirstName\n"
            . "Last Name: $clientLastName\n"
            . "Email: $clientEmail\n"
            . "Mobile Contact: $clientMobileContact\n"
            . "Address: $clientAddress\n"
            . "Age: $clientAge\n"
            . "Message: $clientMessage\n"
            . "Scheduled Time: $clientScheduledTime\n"
            . "Lead Location: $clientLeadLocation\n"
            . "Privacy Policy Accepted: " . (($privacyPolicy === 'true') ? 'Yes' : 'No') . "\n\n"
            . "View Medisat for more information.";

    $headers = "From: no-reply@lyfexafrica.com\r\n";  // Using a no-reply email for sending
    $headers .= "Reply-To: no-reply@lyfexafrica.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    try {
        $mailSent = mail($to, $subject, $message, $headers);

        if (!$mailSent) {
            throw new Exception('Failed to send email.');
        }

    } catch (Exception $e) {
        // Error in email sending
        echo json_encode(['error' => 'An error occurred while sending the email: ' . $e->getMessage()]);
        error_log('Error sending email: ' . $e->getMessage());
    }


    // Close the connection
    sqlsrv_close($conn);
    
} else {
    echo json_encode(['error' => 'No POST data received.']);
    exit();
}
?>
