<?php
session_start(); 
session_unset(); // Clear all session variables
session_destroy(); // Destroy the session

require_once 'config_session.php';


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
        echo json_encode(['error' => 'Error: Fill in all fields!']);
        exit();
    }

    if (!isValidEmail($email)) {
        echo json_encode(['error' => 'Error: Invalid email address!']);
        exit();
    }

    if (!isValidMobileNumber($mobileNo)) {
        echo json_encode(['error' => 'Error: Mobile number must be 10 digits long, for MTN / AIRTEL!']);
        exit();
    }

    $wordCount = str_word_count($message);
    if ($wordCount > 100) {
        echo json_encode(['error' => 'Error: Message should contain less than 100 words!']);
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

        // Collect POST data into an associative array
        $client_data = [
            'name' => $name,
            'serviceName' => $serviceName,
            'email' => $email,
            'mobileNo' => $mobileNo,
            'message' => $message
        ];

        // Store the array in a session variable
        $_SESSION['client_data'] = $client_data;
        session_write_close(); // Ensure session data is saved
        error_log('Stored client data: ' . print_r($_SESSION, true));

        // Success in initiating collection
        echo json_encode(['success' => 'Enter pin on your phone to confirm transaction.']);

        exit();
    } else {
        // Extract error message from the response
        if (preg_match('/"Message":"(.*?)"/', $initiateResponse, $matches)) {
            $errorMessage = $matches[1];
        } else {
            $errorMessage = 'Unknown error, Transaction Status: Failed!.';
        }
        echo json_encode(['error' => 'Failed to initiate collection: ' . $errorMessage]);
        http_response_code(500); // Internal Server Error
    }

} else {
    echo json_encode(['error' => 'Invalid request, Transaction Status: Failed!']);
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
    return strval(rand(100000, 999999));
}
