<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $sender_name = $_POST['sender-name'];
    $sender_email = $_POST['sender-email'];
    $sender_subject = $_POST['sender-subject'];
    $sender_message = $_POST['sender-message'];
    
    if (empty($sender_name) || empty($sender_email) || empty($sender_subject) || empty($sender_message) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        header('Location:../contact.php?error');
    } else {
        $to = 'lyfexafrica@gmail.com';
        if (mail($to, $sender_subject, $sender_message, $sender_email)) {
            header('Location:../contact.php?success');
        }
    }
} else {
    header('Location:../contact.php');
}
