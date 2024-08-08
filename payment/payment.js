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

        // Basic validation
        if (!$paymentDate.val().trim() || !$name.val().trim() || !$price.val().trim() || 
            !$currency.val().trim() || !$serviceName.val().trim() || !$email.val().trim() || 
            !$mobileNo.val().trim() || !$message.val().trim()) {
            $statusMessage.removeClass('text-success').addClass('text-danger');
            $statusMessage.text('Please fill all required fields.');
            return;
        }

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
                    $trasactionStatus.text("Trasction Pending...")
                }, 10000);
                setTimeout(() => {
                    fetchPaymentCallback();
                    $trasactionStatus.text("Transaction Loading...")
                }, 20000); 
            } else {
                $statusMessage.removeClass('text-success').addClass('text-danger');
                $statusMessage.text(data.error);
            }
        })
        .catch(error => {
            // Handle error response
            console.error('Error', error);
            $statusMessage.text('An error occurred');
        });
    });
    
    function fetchPaymentCallback() {
        // Create a JavaScript object to send as JSON
        const data = {
            email: $($email).val().trim(),
            name: $($name).val().trim(),
            serviceName: $($serviceName).val().trim()
        };
    
        // Send the data as JSON
        fetch('payment/callback.php', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Convert the data object to a JSON string
        })
        .then(response => response.json())
        .then(data => {
            // Handle success response
            if (data.success) {
                $trasactionStatus.text(data.success);
            } else {
                $trasactionStatus.text(data.error);
            }
        })
        .catch(error => {
            // Handle error response
            console.error('Error', error);
            $trasactionStatus.text('An error occurred');
        });
    }
});
