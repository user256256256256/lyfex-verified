/*
Copyright (c) 2024 Lyfex Africa. All rights reserved.
This website is licensed under the Lyfex Africa terms of use. Unauthorized copying or distribution is prohibited.
Author: Engineer Ibn Muzamir.
*/


$(document).ready(function() {
    $('#sendMessageButton').on('click', function(e) {
        e.preventDefault();

        var $statusMessage = $('#status-message');

        // Validate Message Word Count

        // Prepare Form Data
        var params = new URLSearchParams({
            clientName: $('#name').val().trim(),
            clientEmail: $('#email').val().trim(),
            clientMobileContact: $('#subject').val().trim(),
            clientAddress: $('#address').val().trim(),
            clientWhContact: $('#wh-contact').val().trim(),
            clientAge: $('#age').val().trim(),
            clientScheduledTime: $('#schedule').val(),
            clientLeadLocation: $('#lead-location').val(),
            clientMessage: $('#message').val().trim(),
            privacyPolicy: $('#privacy-policies').is(':checked') ? 'true' : 'false'
        });

        // Send Data Using Fetch
        fetch('appointment/appointment.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params.toString()
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                $statusMessage.addClass('show')
                $statusMessage.removeClass('alert-danger').addClass('alert-success').text(data.success);

                // Refresh page
                setTimeout(function() {
                    window.location.reload();
                }, 5000);
            } else {
                $statusMessage.addClass('show')
                $statusMessage.removeClass('alert-success').addClass('alert-danger').text(data.error);
            }
        })
        .catch(error => {
            $statusMessage.addClass('show')
            $statusMessage.removeClass('alert-success').addClass('alert-danger').text('An error occurred. Contact support')
            console.error('Error:', error);
        });
    });
});
