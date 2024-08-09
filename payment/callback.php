<?php
session_start(); // Start session to store transaction data

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $_SESSION['transactionStatus'] = 'success';

    // Handle POST requests
    $input = file_get_contents('php://input');
    
    if (!$input) {
        echo json_encode(['error' => 'No data received, Transaction Status: Not known, contact support']);
        http_response_code(400);
        exit();
    }

    $data = json_decode($input, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['error' => 'Invalid JSON from the request, Transaction Status: Not known, contact support']);
        http_response_code(400);
        exit();
    }

    // Log the decoded data
    error_log('Decoded data: ' . print_r($data, true));

    if (isset($data['transactionID'])) {
        
        echo json_encode(['success' => 'Transaction response recieved successfully']);

        $transactionID = $data['transactionID'];
        $amount = $data['amount'];
        $refno = $data['refno'];
        $narration = $data['narration'];
        $dateApproved = $data['date_approved'];  
        
        // Extract session data
        $name = isset($_SESSION['name']) ? $_SESSION['name'] : 'Unknown';
        $email = isset($_SESSION['email']) ? $_SESSION['email'] : 'Unknown';
        $message = isset($_SESSION['message']) ? $_SESSION['message'] : 'No message';
        $mobileNo = isset($_SESSION['mobile-no']) ? $_SESSION['mobile-no'] : 'Unknown';
        $serviceName = isset($_SESSION['service-name']) ? $_SESSION['service-name'] : 'Unknown';

        // Prepare and send email
        $to = 'info@lyfexafrica.com';
        $subject = 'New Successful Transaction from ' . $name;
        $emailMessage = "Transaction was successful.\n\nDetails:\nService Name: $serviceName\nEmail: $email\nAmount: $amount\nTransaction ID: $transactionID";
        $headers = "From: no-reply@yourdomain.com\r\nReply-To: no-reply@yourdomain.com\r\nContent-Type: text/plain; charset=UTF-8\r\n";

        try {

            $mailSent = mail($to, $subject, $emailMessage, $headers);
            error_log('Transaction mail sent: ' .$to);

            if (!$mailSent) {
                throw new Exception('Failed to send email.');
            }

            exit();
        } catch (Exception $e) {
            error_log('Error sending email: ' . $e->getMessage());
            exit();
        }
        
        session_unset();
        session_destroy();
        exit();
    } 

    echo json_encode(['error' => 'Transaction Status: No transaction data recieved']);
    http_response_code(400);
    exit();
} 

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    if (isset($_SESSION['transactionStatus'])) {
        echo json_encode(['success' => 'Transaction status: Successfully.']);
    } else {
        echo json_encode(['error' => 'Transaction Status: Not known, contact support']);
    }
    http_response_code(200);
    exit();
}

error_log('Request method not POST or GET: ' . $_SERVER['REQUEST_METHOD']);
echo json_encode(['error' => 'Invalid request method, Transaction Status: Not known, contact support']);
http_response_code(405);
