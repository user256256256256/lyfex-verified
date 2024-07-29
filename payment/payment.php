<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST)) {
    
    $paymentDate = $_POST['payment-date'];
    $name = $_POST['name'];
    $currency = $_POST['currency'];
    $serviceName = $_POST['service-name'];
    $email = $_POST['email'];
    $mobileNo = $_POST['mobile-no'];
    $message = $_POST['message'];

    if (empty($paymentDate) || empty($name) || empty($currency) || empty($serviceName) || empty($email) || empty($mobileNo) || empty($message)) {
        echo json_encode(['error' => 'Fill in all fields!']);
        exit(); 
    }

    if (!isValidEmail($email)) {
        echo json_encode(['error' => 'Invalid email address!']);
        exit(); 
    }

    if (!isValidMobileNumber($mobileNo)) {
        echo json_encode(['error' => 'Mobile number must be 10 digits long!']);
        exit(); 
    }

    $wordCount = str_word_count($message);

    // Check if word count exceeds 100
    if ($wordCount > 100) {
        echo json_encode(['error' => 'Message should contain less than 100 words!']);
        exit();
    }
    

    /* 
    End Point: https://eurosatpay.eurosatgroup.com/api/coreapi.aspx
    Content: 
    {
    “payrefno”: “{0}”,
    "paydate”: “{1}”,
    "payamount”: “{2}”,
    "payphoneno”: “{3}”,
    "paycurrency”: “{4}”,
    "particulars”:”{5}”,
    "userkey”:”xxxx”,
    "authkey”:”yyyyy”
    }


    The Reply JSON is in the following format depending on transaction status:
    Successful:
    {“code”:”200”,”Message”:”Collection 676878 Initiated”}
    Transaction Error:
    {“code”:”400”,”Message”:”Data Error! xxxxx”}

    {
    “transactionID”: “8897373”,
    “amount”: “30000”,
    “refno”: “787878”,
    “narration”: “Payment of fees”,
    “date_approved”: “2024-07-15”
    }

    */

    // echo json_encode(['success' => 'Intiated successfully !']);

} else {
  echo json_encode(['error' => 'Failed to connect to server !']);
}

function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function isValidMobileNumber($mobileNo) {
    // Remove all non-numeric characters
    $mobileNo = preg_replace('/\D/', '', $mobileNo);
    return strlen($mobileNo) === 10;
}