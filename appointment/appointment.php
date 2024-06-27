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
  $clientScheduledTime = $_POST['clientScheduledTime'] ;
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
    echo json_encode(['error' => 'Fill in all fields !']);
    exit();
  } 

  if ($privacyPolicy === 'false') {
    echo json_encode(['error' => 'Please verify privacy policies !']);
    exit();
  }

  if (!filter_var($clientEmail, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['error' => 'Invalid email address !']);
    exit();
  }

  if (!is_numeric($clientMobileContact) || strlen($clientMobileContact) !== 10) {
    echo json_encode(['error' => 'Invalid mobile number !']);
    exit();
  }

  if (!empty($clientWhContact)) {
    if (!is_numeric($clientWhContact)) {
      echo json_encode(['error' => 'Invalid whatsapp number !']);
      exit();
    }
  }

  // CONFIGURE THE PHP CODE TO SEND EMAILS. 
  // THE CODE BELOW WAS JUST TEST CODE AND IT MAY NOT WORK.

  $to = 'info@lyfexafrica.com'; 
  $subject = 'Contact Form Submission';
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

  $mailSent = mail($to, $subject, $message, $headers);

  if ($mailSent) {
    echo json_encode(['success' => 'Mail Sent Successfully !']);
  } else {
    echo json_encode(['error' => 'Failed to connect to server !']);
    exit();
  }

  die();
  
} else {
  echo json_encode(['error' => 'Failed to connect to server !']);
}
