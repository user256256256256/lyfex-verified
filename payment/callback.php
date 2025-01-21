<!-- 
Copyright (c) 2024 Lyfex Africa. All rights reserved.
This website is licensed under the Lyfex Africa terms of use. Unauthorized copying or distribution is prohibited.
Author: Engineer Ibn Muzamir.
-->

<?php

require_once 'config_cookie.php'; // Cookie configuration
require_once '../DB/dbo.php'; // Database configuration

// Function to safely get cookie values with a default fallback
function getCookieValue($key, $default = 'Unknown') {
    return isset($_COOKIE[$key]) ? $_COOKIE[$key] : $default;
}

// Handle POST requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Set cookie for transaction status
    setcookie(
        'transactionStatus',
        'success',
        [
            'expires' => time() + $cookie_lifetime,
            'path' => $cookie_path,
            'domain' => $cookie_domain,
            'secure' => $cookie_secure,
            'httponly' => $cookie_httponly,
            'samesite' => 'Strict' // or 'Lax' if 'Strict' causes issues
        ]
    );

    // Log the transaction status set in the cookie
    error_log('Cookie transactionStatus set to: ' . getCookieValue('transactionStatus'));

    // Get the raw POST data
    $input = file_get_contents('php://input');
    
    if (!$input) {
        echo json_encode(['error' => 'No data received, Transaction Status: Not known, contact support']);
        http_response_code(400);
        exit();
    }

    $data = json_decode($input, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['error' => 'Invalid response from the request, Transaction Status: Not known, contact support']);
        http_response_code(400);
        exit();
    }

    // Log the decoded data
    error_log('Decoded data: ' . print_r($data, true));

    if (isset($data['transactionID']) || stripos($data["narration"], 'cancelled') !== false) {

        // Extract transaction data
        $transactionID = isset($data['transactionID']) ? $data['transactionID'] : 'Unknown';
        $amount = isset($data['amount']) ? $data['amount'] : 'Unknown';
        $refno = isset($data['refno']) ? $data['refno'] : 'Unknown';
        $narration = isset($data['narration']) ? $data['narration'] : 'Unknown';
        $dateApproved = isset($data['date_approved']) ? $data['date_approved'] : 'Unknown';

        // Query the database to get transaction details based on refno
        $sql = "SELECT paymentDate, name, price, currency, serviceName, email, mobileNo, message 
                FROM payments_intiated WHERE payrefno = ?";
        
        if ($stmt = $conn->prepare($sql)) {
            $stmt->bind_param('s', $refno);
            $stmt->execute();
            $stmt->store_result();
            
            if ($stmt->num_rows > 0) {
                $stmt->bind_result($paymentDate, $name, $price, $currency, $serviceName, $email, $mobileNo, $message);
                $stmt->fetch();
                
                // Prepare and send email
                $to = 'info@lyfexafrica.com';
                $subject = 'New Successful Transaction from ' . $name;
                $emailMessage = "Transaction was successful.\n\nDetails:\n";
                $emailMessage .= "Payment Date: $paymentDate\n";
                $emailMessage .= "Service Name: $serviceName\n";
                $emailMessage .= "Email: $email\n";
                $emailMessage .= "Amount: $amount\n";
                $emailMessage .= "Transaction ID: $transactionID\n";
                $emailMessage .= "Reference Number: $refno\n";
                $emailMessage .= "Narration: $narration\n";
                $emailMessage .= "Date Approved: $dateApproved\n";
                $emailMessage .= "Message: $message\n";
                $emailMessage .= "Contact used: $mobileNo\n";

                $headers = "From: payment@lyfexafrica.com\r\nReply-To: payments@lyfexafrica.com\r\nContent-Type: text/plain; charset=UTF-8\r\n";
            
                try {
                    $mailSent = mail($to, $subject, $emailMessage, $headers);
                    error_log('Transaction mail sent to: ' . $to);
        
                    if (!$mailSent) {
                        throw new Exception('Failed to send email.');
                    }

                    // Store transaction details in the database
                    $insertSql = "INSERT INTO transactions_successful (
                        transactionID, amount, refno, narration, dateApproved,
                        paymentDate, name, price, currency, serviceName, email, mobileNo, message
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

                    if ($insertStmt = $conn->prepare($insertSql)) {
                        $insertStmt->bind_param(
                            'sisssssssssss',
                            $transactionID, $amount, $refno, $narration, $dateApproved,
                            $paymentDate, $name, $price, $currency, $serviceName, $email, $mobileNo, $message
                        );

                        if ($insertStmt->execute()) {
                            error_log('Transaction details stored in database successfully.');
                        } else {
                            error_log('Error storing transaction details: ' . $insertStmt->error);
                        }

                        $insertStmt->close();
                    } else {
                        error_log('Error preparing SQL statement for inserting transaction details: ' . $conn->error);
                    }
                
                } catch (Exception $e) {
                    error_log('Error sending email: ' . $e->getMessage());
                }
                
            } else {
                error_log('No transaction found in database for refno: ' . $refno);
                echo json_encode(['error' => 'Transaction record not found']);
                http_response_code(404);
                exit();
            }

            $stmt->close();
        } else {
            echo json_encode(['error' => 'Error: Unable to prepare SQL statement.']);
            http_response_code(500);
            exit();
        }
        
        echo json_encode(['success' => 'Transaction response received successfully']);
        exit();
    } 

    echo json_encode(['error' => 'Transaction Status: No transaction data received']);
    http_response_code(400);
    exit();
} 

// Handle GET requests
if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    // Log the current cookie transaction status
    error_log('GET request - Current cookie transactionStatus: ' . getCookieValue('transactionStatus', 'Not set'));
    
    $response = isset($_COOKIE['transactionStatus'])
    ? ['success' => 'Transaction status: Successful.']
    : ['error' => 'Transaction Status: Not known'];

    echo json_encode($response);
    http_response_code(200);
    exit();
}

// Handle other request methods
error_log('Request method not POST or GET: ' . $_SERVER['REQUEST_METHOD']);
echo json_encode(['error' => 'Invalid request method']);
http_response_code(400);
exit();
