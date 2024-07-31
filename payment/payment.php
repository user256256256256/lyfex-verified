<?php

header('Content-Type: application/json');

// Check if the request method is POST for form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST)) {

    // Handle the form submission
    $paymentDate = $_POST['payment-date'];
    $name = $_POST['name'];
    $price = $_POST['price'];
    $currency = $_POST['currency'];
    $serviceName = $_POST['service-name'];
    $email = $_POST['email'];
    $mobileNo = $_POST['mobile-no'];
    $message = $_POST['message'];

    // Validate form fields
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

    if ($wordCount > 100) {
        echo json_encode(['error' => 'Message should contain less than 100 words!']);
        exit();
    }

    // Generate a numeric payrefno
    $payrefno = generateNumericPayrefno();

    // Eurosat API endpoint for initiating collection
    $initiateEndpoint = 'https://eurosatpay.eurosatgroup.com/api/coreapi.aspx';

    $initiateData = [
        'payrefno' => $payrefno,
        'paydate' => $paymentDate,
        'payamount' => $price,
        'payphoneno' => $mobileNo,
        'paycurrency' => $currency,
        'particulars' => $serviceName,
        'userkey' => 'lyfex',
        'authkey' => '4afc426b-ec76-42e8-a1f3-0fc9c298c75c'
    ];
    $initiateJsonData = json_encode($initiateData);

    $initiateCurl = curl_init($initiateEndpoint);

    curl_setopt($initiateCurl, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($initiateCurl, CURLOPT_POSTFIELDS, $initiateJsonData);
    curl_setopt($initiateCurl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($initiateCurl, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Content-Length: ' . strlen($initiateJsonData)
    ]);

    $initiateResponse = curl_exec($initiateCurl);

    if (curl_errno($initiateCurl)) {
        echo json_encode(['error' => 'cURL Error: ' . curl_error($initiateCurl)]);
        curl_close($initiateCurl);
        exit();
    }

    curl_close($initiateCurl);

    // Log raw API response for debugging
    error_log('Raw API Response: ' . $initiateResponse);

    // Check for success code in the raw response
    if (strpos($initiateResponse, '"code":"200"') !== false) {
        // Success in initiating collection
        echo json_encode(['success' => 'Enter pin on your phone']);
    } else {
        // Extract error message from the response
        if (preg_match('/"Message":"(.*?)"/', $initiateResponse, $matches)) {
            $errorMessage = $matches[1];
        } else {
            $errorMessage = 'Unknown error';
        }
        echo json_encode(['error' => 'Failed to initiate collection: ' . $errorMessage]);
        http_response_code(500); // Internal Server Error
    }

} else if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty(file_get_contents('php://input'))) {
    // Handle callback
    $input = file_get_contents('php://input');

    echo json_encode(['error' => $input]);

    // echo json_encode(['success' => $input]);

    // Log raw input for debugging
    error_log('Raw Callback Input: ' . $input);

    $data = json_decode($input, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        error_log('JSON Decode Error: ' . json_last_error_msg());
        echo json_encode(['error' => 'Invalid JSON']);
        http_response_code(400); // Bad Request
        exit();
    }

    // Log decoded data for debugging
    error_log('Decoded Callback Data: ' . print_r($data, true));

    // Validate the incoming callback data
    if (!isset($data['transactionID']) || !isset($data['amount']) || !isset($data['refno']) || !isset($data['narration']) || !isset($data['date_approved'])) {
        error_log('Invalid data received in callback: ' . print_r($data, true));
        echo json_encode(['error' => 'Invalid data']);
        http_response_code(400); // Bad Request
        exit();
    }

    // Extract data
    $transactionID = $data['transactionID'];
    $amount = $data['amount'];
    $refno = $data['refno'];
    $narration = $data['narration'];
    $dateApproved = $data['date_approved'];

    // Log the callback data for debugging
    error_log('Callback Data: ' . print_r($data, true));

    echo json_encode(['success' => 'Callback received successfully']);
    http_response_code(200); // OK
} else {
    echo json_encode(['error' => 'Invalid request']);
}

// Function to validate email address
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Function to validate mobile number
function isValidMobileNumber($mobileNo) {
    // Remove all non-numeric characters
    $mobileNo = preg_replace('/\D/', '', $mobileNo);
    return strlen($mobileNo) === 10;
}

// Function to generate a numeric payrefno
function generateNumericPayrefno() {
    // You can use a more complex logic if needed
    return strval(rand(100000, 999999));
}
