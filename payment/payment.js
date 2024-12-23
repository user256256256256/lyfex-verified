/*
Copyright (c) 2024 Lyfex Africa. All rights reserved.
This website is licensed under the Lyfex Africa terms of use. Unauthorized copying or distribution is prohibited.
Author: Engineer Ibn Muzamir.
*/

$(document).ready(function() {
    // Accessing input fields by their IDs
    var $paymentDate = $('#payment-date');
    var $name = $('#name');
    var $price = $('#price');
    var $currency = $('#currency');
    var $serviceName = $('#service-name');
    var $email = $('#email');
    var $mobileNo = $('#mobile-no');
    var $message = $('#message');
    var $paymentBtn = $('#initiate-payment');
    var $statusMessage = $('#payment-status-message');
    var $trasactionStatus = $('#transaction-status-message')

    // Disable the payment button initially
    $paymentBtn.prop('disabled', false);

    // Input validation for mobile number
    $($mobileNo).on('keydown', function(event) {
        // Get current input value and its length
        let inputValue = $(this).val();
        let currentLength = inputValue.length;

        // Allow: backspace, delete, tab, escape, enter, and numeric keys
        if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Tab' ||
            event.key === 'Escape' || event.key === 'Enter' ||
            (event.key >= '0' && event.key <= '9')) {

            // Allow key press if less than 10 digits or if it's a valid key
            if ((event.key === 'Backspace' || event.key === 'Delete') || currentLength < 10) {
                return true;
            } else {
                // Prevent key press if already 10 digits
                event.preventDefault();
                return false;
            }
        } else {
            // Prevent key press for non-numeric and non-allowed keys
            event.preventDefault();
            return false;
        }
    });

    $paymentBtn.click(function(event) {
        event.preventDefault(); 

        var formData = new URLSearchParams();

        formData.append('payment-date', $($paymentDate).val().trim());
        formData.append('name', $($name).val().trim());
        formData.append('price', $($price).val().trim());
        formData.append('currency', $($currency).val().trim());
        formData.append('service-name', $($serviceName).val().trim());
        formData.append('email', $($email).val().trim());
        formData.append('mobile-no', $($mobileNo).val().trim());
        formData.append('message', $($message).val().trim());

        fetch('payment/payment.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Handle success response         
            if (data.success) {
                $statusMessage.removeClass('alert-danger').addClass('alert-success');
                $statusMessage.addClass('show')
                $statusMessage.text(data.success);
                $paymentBtn.prop('disabled', true);

                setTimeout(() => { 
                    $trasactionStatus.addClass('show')
                    $trasactionStatus.addClass('alert-info');
                    $trasactionStatus.text("Transaction Status: Data is ready for sending to Eurosat Pay...")
                }, 1000)
                setTimeout(() => {
                    $trasactionStatus.text("Transaction Status: Data is sent to Eurosat Pay...")
                }, 2000)
                setTimeout(() => {
                    $trasactionStatus.text("Transaction Status: Pending...")
                }, 3000);
                setTimeout(() => {
                    fetchPaymentCallback();
                }, 10000); 
            } else {
                $statusMessage.addClass('show')
                $statusMessage.removeClass('alert-success').addClass('alert-danger');
                $statusMessage.text(data.error);
            }
        })
        .catch(error => {
            // Handle error response
            console.error('Error', error);
            $statusMessage.addClass('show')
            $statusMessage.removeClass('alert-success').addClass('alert-danger');
            $statusMessage.text('An error occurred, check your internet connection. Transaction Status: Failed');
        });
    });
    
    function fetchPaymentCallback(retryCount = 0) {
        const maxRetries = 5; // Define the maximum number of retries
        const retryDelay = 5000; // 5 seconds delay
    
        $statusMessage.addClass('d-none');
    
        fetch('payment/callback.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Successful response, update status and hide messages
                $trasactionStatus.text(data.success);
            } else {
                // If there is an error, retry fetching the status
                $trasactionStatus.text('Retrying to fetch transaction status...');
                if (retryCount < maxRetries) {
                    setTimeout(() => {
                        fetchPaymentCallback(retryCount + 1); // Recursive call with incremented retry count
                    }, retryDelay);
                } else {
                    $trasactionStatus.text('Failed to retrieve transaction status after multiple attempts.');
                }
            }
        })
        .catch(error => {
            console.error('Error', error);
            $trasactionStatus.text('Retrying to fetch status...');
            if (retryCount < maxRetries) {
                setTimeout(() => {
                    fetchPaymentCallback(retryCount + 1); // Recursive call with incremented retry count
                }, retryDelay);
            } else {
                $trasactionStatus.text('An error occurred while checking the transaction status after multiple attempts.');
            }
        });
    }    
});
