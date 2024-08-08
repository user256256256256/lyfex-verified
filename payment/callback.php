<?php
session_start(); // Start session to store transaction status

// Handle POST requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Read and decode JSON input
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['error' => 'Invalid JSON from the request']);
        http_response_code(400); // Bad Request
        exit();
    }

    // Check for Eurosat Pay request
    if (isset($data['transactionID'], $data['amount'], $data['refno'], $data['narration'], $data['date_approved'])) {
        // Process Eurosat Pay transaction data
        $transactionID = htmlspecialchars($data['transactionID']);
        $amount = htmlspecialchars($data['amount']);
        $refno = htmlspecialchars($data['refno']);
        $narration = htmlspecialchars($data['narration']);
        $dateApproved = htmlspecialchars($data['date_approved']);

        // Simulate transaction status (this would be replaced by actual logic)
        $transactionStatus = 'success'; // or 'failure'

        // Store the transaction status in the session
        $_SESSION['transactionStatus'] = $transactionStatus;

        // if session exists then send an email => only when the trasaction status wasn't found.
        if (isset($_SESSION['name']) && isset($_SESSION['serviceName']) && isset($_SESSION['email'])) {
            // Retrieve data from session
            $name = $_SESSION['name'];
            $serviceName = $_SESSION['serviceName'];
            $email = $_SESSION['email'];

            $to = 'info@lyfexafrica.com';
            $subject = 'New Successful Transaction from ' . $name;
            $message = "Transaction was successful.\n\nDetails:\nService Name: $serviceName\nEmail: $email";
            $headers = "From: no-reply@yourdomain.com\r\n";
            $headers .= "Reply-To: no-reply@yourdomain.com\r\n";
            $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

            mail($to, $subject, $message, $headers);

            unset($_SESSION['name']);
            unset($_SESSION['serviceName']);
            unset($_SESSION['email']);

            // session_destroy();
            exit();
        } 


        // Respond to Eurosat Pay
        echo json_encode(['transactionStatus' => $transactionStatus]);
        http_response_code(200);
        exit();
    }


    // Check for payment.js request

    if (isset($data['name'], $data['serviceName'], $data['email'])) {

        // Extract details from payment.js request
        $name = htmlspecialchars($data['name']);
        $serviceName = htmlspecialchars($data['serviceName']);
        $email = htmlspecialchars($data['email']);

        // Check if transaction status is set in the session
        if (!isset($_SESSION['transactionStatus'])) {

            echo json_encode(['error' => 'Transaction status not found, contact +256-755219625 to verify your transaction if you Entered pin!']);

            $_SESSION['name'] = $name;
            $_SESSION['serviceName'] = $serviceName;
            $_SESSION['email'] = $email;
            http_response_code(400); // Bad Request
            exit();
        }

        // Get transaction status from the session
        $transactionStatus = $_SESSION['transactionStatus'];

        // Clear session data
        unset($_SESSION['transactionStatus']);

        // Prepare response and email
        if ($transactionStatus === 'success') {
            // Send email
            $to = 'info@lyfexafrica.com';
            $subject = 'New Successful Transaction from ' . $name;
            $message = "Transaction was successful.\n\nDetails:\nService Name: $serviceName\nEmail: $email";
            $headers = "From: no-reply@yourdomain.com\r\n";
            $headers .= "Reply-To: no-reply@yourdomain.com\r\n";
            $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

            mail($to, $subject, $message, $headers);

            // Respond to payment.js
            echo json_encode(['success' => 'Transaction is successful']);
            http_response_code(200);
        } else {
            echo json_encode(['error' => 'Transaction failed']);
            http_response_code(400); // Bad Request
        }
        exit();
    }

    // Invalid request
    echo json_encode(['error' => 'Invalid request']);
    http_response_code(400); // Bad Request
}
?>
