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

    $wordCountSubject = str_word_count($senderSubject);
    if ($wordCountSubject > 10) {
        echo json_encode(['error' => 'Use less than 10 words for the subject!']);
        exit();
    }

    $wordCountMessage = str_word_count($senderMessage);
    if ($wordCountMessage > 255) {
        echo json_encode(['error' => 'Use less than 255 words for the message!']);
        exit();
    }


    $to = 'info@lyfexafrica.com';
    $subject = 'New Message: ' . $senderSubject;
    $message = 'Name: ' . $senderName . "\r\n\r\n";
    $message .= 'Email: ' . $senderEmail . "\r\n\r\n";
    $message .= 'Message: ' . "\r\n" . $senderMessage;

    $headers = "From: $clientEmail\r\n";

    try {

        $mailSent = mail($to, $subject, $message, $headers);

        if (!$mailSent) {
            throw new Exception('Failed to send email.');
        }

        echo json_encode(['success' => 'Mail received successfully!']);
        exit();

    } catch (Exception $e) {
        echo json_encode(['error' => 'An error occurred: ' . $e->getMessage()]);
        error_log('Error sending email: ' . $e->getMessage());
        exit();
    }

    die();

} else {
    echo json_encode(['error' => 'Failed to connect to server !']);
}