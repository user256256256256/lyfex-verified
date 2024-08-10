<?php
require_once 'config_session.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $_SESSION['transactionStatus'] = 'success';

    // Log the transaction status set in the session
    error_log('Session transactionStatus set to: ' . $_SESSION['transactionStatus']);

    // Extract client data from session
    $clientData = $_SESSION['clientData'];
    
    // Extract session data from client array
    $name = isset($clientData['name']) ? $clientData['name'] : 'Unknown';
    $serviceName = isset($clientData['serviceName']) ? $clientData['serviceName'] : 'Unknown';
    $email = isset($clientData['email']) ? $clientData['email'] : 'Unknown';
    $mobileNo = isset($clientData['mobileNo']) ? $clientData['mobileNo'] : 'Unknown';
    $message = isset($clientData['message']) ? $clientData['message'] : 'Unknown';

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

    // // Log the decoded data
    error_log('Decoded data: ' . print_r($data, true));

    if (isset($data['transactionID'])) {        

        // Respond to Eurosat
        echo json_encode(['success' => 'Transaction response received successfully']);
        
        // Extract transaction data
        $transactionID = $data['transactionID'];
        $amount = $data['amount'];
        $refno = $data['refno'];
        $narration = $data['narration'];
        $dateApproved = $data['date_approved'];  
    
        // Prepare and send email
        $to = 'info@lyfexafrica.com';
        $subject = 'New Successful Transaction from ' . $name;
        $emailMessage = "Transaction was successful.\n\nDetails:\n";
        $emailMessage .= "Service Name: $serviceName\n";
        $emailMessage .= "Email: $email\n";
        $emailMessage .= "Amount: $amount\n";
        $emailMessage .= "Transaction ID: $transactionID\n";
        $emailMessage .= "Reference Number: $refno\n";
        $emailMessage .= "Narration: $narration\n";
        $emailMessage .= "Date Approved: $dateApproved\n";
        $emailMessage .= "Message: $message\n";
        $emailMessage .= "Contact used: $mobileNo\n";

        $headers = "From: nutrifin@lyfexafrica.com\r\nReply-To: payments@lyfexafrica.com\r\nContent-Type: text/plain; charset=UTF-8\r\n";
    
        try {
            $mailSent = mail($to, $subject, $emailMessage, $headers);
            error_log('Transaction mail sent to: ' . $to);
    
            if (!$mailSent) {
                throw new Exception('Failed to send email.');
            }

        } catch (Exception $e) {
            error_log('Error sending email: ' . $e->getMessage());
        }
        exit();
    } 
    

    echo json_encode(['error' => 'Transaction Status: No transaction data received']);
    http_response_code(400);
    exit();
} 

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    // Log the current session transaction status
    error_log('GET request - Current session transactionStatus: ' . (isset($_SESSION['transactionStatus']) ? $_SESSION['transactionStatus'] : 'Not set'));
    
    $response = isset($_SESSION['transactionStatus'])
    ? ['success' => 'Transaction status: Successfull.']
    : ['error' => 'Transaction Status: Complete, contact Admin +256-779-185562'];

    echo json_encode($response);

    http_response_code(200);
    exit();
}

error_log('Request method not POST or GET: ' . $_SERVER['REQUEST_METHOD']);
echo json_encode(['error' => 'Invalid request method']);
http_response_code(400);
exit();
