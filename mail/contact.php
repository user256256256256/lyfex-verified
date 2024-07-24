<?php

// js config

header('Content-Type: application/json');

if (!empty($_POST)) {
    $senderName = $_POST['senderName'];
    $senderEmail = $_POST['senderEmail'];
    $senderSubject = $_POST['senderSubject'];
    $senderMessage = $_POST['senderMessage'];

    // check errors
    
    if (empty($senderName) || empty($senderEmail) || empty($senderSubject) || empty($senderMessage)) {
        echo json_encode(['error' => 'Fill in all fields !']);
        exit();
    } 
    if (!filter_var($senderEmail, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['error' => 'Invalid email address !']);
        exit();
    }

    $to = 'info@lyfexafrica.com';
    $subject = 'New Message: ' . $senderSubject;
    $message = 'Name: ' . $senderName . "\r\n\r\n";
    $message .= 'Email: ' . $senderEmail . "\r\n\r\n";
    $message .= 'Message: ' . "\r\n" . $senderMessage;

    $headers = 'From: ' . $senderName . ' <' . $senderEmail . '>' . "\r\n" .
    'Reply-To: ' . $senderEmail . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    $mailSent = mail($to, $subject, $message, $headers);

    if ($mailSent) {
        echo json_encode(['success' => 'Mail Sent Successfully !']);
    } else {
         echo json_encode(['error' => 'Failed to connect to server !']);
    }

    die();

} else {
    echo json_encode(['error' => 'Failed to connect to server !']);
}