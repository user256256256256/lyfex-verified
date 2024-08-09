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
                $statusMessage.removeClass('text-danger').addClass('text-success');
                $statusMessage.text(data.success);
                $paymentBtn.prop('disabled', true);
                setTimeout(() => {
                    $trasactionStatus.text("Transaction Status: Data is ready for sending to Eurosat Pay")
                }, 5000)
                setTimeout(() => {
                    $trasactionStatus.text("Transaction Status: Data is sent to Eurosat Pay")
                }, 10000)
                setTimeout(() => {
                    $trasactionStatus.text("Transaction Status: Pending...")
                }, 15000);
                setTimeout(() => {
                    fetchPaymentCallback();
                }, 35000); 
            } else {
                $statusMessage.removeClass('text-success').addClass('text-danger');
                $statusMessage.text(data.error);
            }
        })
        .catch(error => {
            // Handle error response
            console.error('Error', error);
            $statusMessage.addClass('text-danger');
            $statusMessage.text('An error occurred, Transaction Status: Failed');
        });
    });
    
    function fetchPaymentCallback(attempt = 1) {
        const maxAttempts = 5; // Maximum number of retry attempts
        const retryDelay = 5000; // Delay between attempts in milliseconds (5 seconds)
    
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
                // Handle the error response
                $trasactionStatus.text(data.error);
            }
        })
        .catch(error => {
            console.error('Error', error);
            $trasactionStatus.text('An error occurred while checking the transaction status.');
        })
        .finally(() => {
            // Retry logic if status is still pending and attempts are not exhausted
            if (attempt < maxAttempts) {
                setTimeout(() => {
                    $trasactionStatus.text('Retrying to fetch status...')
                    fetchPaymentCallback(attempt + 1);
                }, retryDelay);
            } else {
                // If max attempts reached, notify the user
                $trasactionStatus.text('Transaction Status: Could not determine the status after multiple attempts.');
            }
        });
    }
    
});
