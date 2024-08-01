<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty(file_get_contents('php://input'))) {
    $input = file_get_contents('php://input');
    
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

    // Check for nested JSON in the error field
    if (isset($data['error'])) {
        $errorDetail = $data['error'];
        
        $errorData = json_decode($errorDetail, true);
        $errorMessage = json_last_error() === JSON_ERROR_NONE ? print_r($errorData, true) : $errorDetail;

        echo json_encode(['error' => 'Callback received with error: ' . $errorMessage]);
        http_response_code(500); // Internal Server Error
        exit();
    }

    // Validate the incoming callback data
    $requiredFields = ['transactionID', 'amount', 'refno', 'narration', 'date_approved'];
    foreach ($requiredFields as $field) {
        if (!isset($data[$field])) {
            error_log('Missing field in callback data: ' . $field);
            echo json_encode(['error' => 'Invalid data']);
            http_response_code(400); // Bad Request
            exit();
        }
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
    echo json_encode(['error' => 'Invalid request method']);
    http_response_code(405); // Method Not Allowed
}
