<?php
// js config

header('Content-Type: application/json');

if (!empty($_POST)) {
    $clientName = $_POST['clientName'];
    $clientEmail = $_POST['clientEmail'];
    $clientMobileContact = $_POST['clientMobileContact'];
    $clientAddress = $_POST['clientAddress'];
    $clientWhContact = $_POST['clientWhContact'] ?? '';
    $clientAge = $_POST['clientAge'];
    $clientScheduledTime = $_POST['clientScheduledTime'];
    $clientLeadLocation = $_POST['clientLeadLocation'] ?? '';
    $clientMessage = $_POST['clientMessage'];
    $privacyPolicy = $_POST['privacyPolicy'];

    if (empty($clientName) ||
        empty($clientEmail) ||
        empty($clientMobileContact) ||
        empty($clientAddress) ||
        empty($clientAge) ||
        empty($clientScheduledTime) ||
        empty($clientMessage)) {
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

    if (!empty($clientWhContact)) {
        if (!is_numeric($clientWhContact)) {
            echo json_encode(['error' => 'Invalid whatsapp number!']);
            exit();
        }
    }

    $to = 'info@lyfexafrica.com';
    $subject = "New Appointment From: $clientName";
    $message = "
    Client Name: $clientName
    Client Email: $clientEmail
    Client Mobile Contact: $clientMobileContact
    Client Address: $clientAddress
    Client WhatsApp Contact: $clientWhContact
    Client Age: $clientAge
    Client Scheduled Time: $clientScheduledTime
    Client Lead Location: $clientLeadLocation
    
    Client Message: $clientMessage
    Privacy Policy Accepted: " . ($privacyPolicy ? 'Yes' : 'No');
    $headers = "From: $clientEmail\r\n";

    // Attempt to send the main email
    try {
        $mailSent = mail($to, $subject, $message, $headers);

        if (!$mailSent) {
            throw new Exception('Failed to send email.');
        }

        // Send automatic response to the client
        $clientResponseSubject = 'Thank you for your inquiry';
        $clientResponseMessage = "Dear $clientName,\r\n\r\nThank you for contacting us. We have received your message and will get back to you as soon as possible.\r\n\r\nBest regards,\r\nLyfex Africa Team";

        $clientResponseHeaders = "From: info@lyfexafrica.com\r\n";
        $clientResponseSent = mail($clientEmail, $clientResponseSubject, $clientResponseMessage, $clientResponseHeaders);

        if (!$clientResponseSent) {
            throw new Exception('Failed to send automatic response email.');
        }

        echo json_encode(['success' => 'Mail received successfully!']);
        exit();
    } catch (Exception $e) {
        echo json_encode(['error' => 'An error occurred: ' . $e->getMessage()]);
        error_log('Error sending email: ' . $e->getMessage());
        exit();
    }
} else {
    echo json_encode(['error' => 'No POST data received.']);
    exit();
}
