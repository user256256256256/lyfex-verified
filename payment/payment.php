<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST)) {
    
    $paymentDate = $_POST['payment-date']; // Adjust according to your form field names
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

    // Check if word count exceeds 100
    if ($wordCount > 100) {
        echo json_encode(['error' => 'Message should contain less than 100 words!']);
        exit();
    }

    // Eurosat API endpoint for initiating collection
    $initiateEndpoint = 'https://eurosatpay.eurosatgroup.com/api/coreapi.aspx';

    // Data to be sent as JSON for collection initiation
    $initiateData = [
        'payrefno' => uniqid(),  // Generate a unique payment reference number
        'paydate' => $paymentDate,
        'payamount' => $price,    // Example: adjust according to your requirements
        'payphoneno' => $mobileNo,
        'paycurrency' => $currency,
        'particulars' => $serviceName,
        'userkey' => 'lyfex',     // Replace with your actual user key
        'authkey' => '4afc426b-ec76-42e8-a1f3-0fc9c298c75c'     // Replace with your actual auth key
    ];

    // Encode the data as JSON for collection initiation
    $initiateJsonData = json_encode($initiateData);

    // Initialize cURL session for collection initiation
    $initiateCurl = curl_init($initiateEndpoint);

    // Set cURL options to send JSON data and receive response for collection initiation
    curl_setopt($initiateCurl, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($initiateCurl, CURLOPT_POSTFIELDS, $initiateJsonData);
    curl_setopt($initiateCurl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($initiateCurl, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Content-Length: ' . strlen($initiateJsonData)
    ]);

    // Execute cURL session for collection initiation
    $initiateResponse = curl_exec($initiateCurl);

    // Check for cURL errors for collection initiation
    if (curl_errno($initiateCurl)) {
        echo json_encode(['error' => 'Error: ' . curl_error($initiateCurl)]);
        curl_close($initiateCurl);
        exit();
    }

    // Close cURL session for collection initiation
    curl_close($initiateCurl);

    // Decode the response JSON for collection initiation
    $initiateResponseData = json_decode($initiateResponse, true);

    // Check if decoding was successful
    if ($initiateResponseData === null && json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['error' => 'Failed to decode response JSON']);
        http_response_code(500); // Internal Server Error
        exit();
    }

    // Check if the response contains the expected keys
    if (!isset($initiateResponseData['code']) || !isset($initiateResponseData['Message'])) {
        echo json_encode(['error' => 'Unexpected response format from Eurosat API']);
        http_response_code(500); // Internal Server Error
        exit();
    }

    if ($initiateResponseData['code'] === '200') {
        // Success in initiating collection, now prepare to handle callback
        // Assuming this is the callback handling part

        // Read the JSON from the callback POST request
        $callbackJsonPayload = file_get_contents('php://input');


        // Decode JSON payload from callback
        
        $callbackData = json_decode($callbackJsonPayload, true);

        // Check if JSON decoding was successful for callback
        if ($callbackData === null && json_last_error() !== JSON_ERROR_NONE) {
            echo json_encode(['error' => 'Invalid JSON received for callback']);
            http_response_code(400); // Bad Request
            exit();
        }

        // Check if the expected keys are present in the callback data
        $requiredKeys = ['transactionID', 'amount', 'refno', 'narration', 'date_approved'];
        foreach ($requiredKeys as $key) {
            if (!isset($callbackData[$key])) {
                echo json_encode(['error' => 'Missing required callback data: ' . $key]);
                http_response_code(400); // Bad Request
                exit();
            }
        }

        // Extract relevant data from the callback for further processing
        $transactionID = $callbackData['transactionID'];
        $amount = $callbackData['amount'];
        $refno = $callbackData['refno'];
        $narration = $callbackData['narration'];
        $dateApproved = $callbackData['date_approved'];

        // Respond with a success message for callback
        echo json_encode(['success' => 'Collection initiated successfully and callback received']);

    } else {
        echo json_encode(['error' => 'Failed to initiate collection: ' . $initiateResponseData['Message']]);
    }

} else {
    echo json_encode(['error' => 'Invalid request']);
}

function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function isValidMobileNumber($mobileNo) {
    // Remove all non-numeric characters
    $mobileNo = preg_replace('/\D/', '', $mobileNo);
    return strlen($mobileNo) === 10;
}
