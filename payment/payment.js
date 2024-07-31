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


    $('#initiate-payment').click(function(event) {
        event.preventDefault(); 

        var $statusMessage = $('#payment-status-message');

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
                $statusMessage.removeClass('text-danger');
                $statusMessage.addClass('text-success');
                $statusMessage.text(data.success);

            } else {
                $statusMessage.removeClass('text-success');
                $statusMessage.addClass('text-danger');
                $statusMessage.text(data.error);
            }
        })
        .catch(error => {
            // Handle error response
            console.error('Error', error);
            $statusMessage.text(error);
        });
    })
    
});
