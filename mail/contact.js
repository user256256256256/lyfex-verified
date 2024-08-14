$(document).ready(function() {
    $('#sendMessageButton').on('click', function(e) {
        e.preventDefault();

        var senderName = $('#name').val().trim();
        var senderEmail = $('#email').val().trim();
        var senderSubject = $('#subject').val().trim();
        var senderMessage = $('#message').val().trim();
        var statusMessage = $('#status-message');

        var params = new URLSearchParams();
        params.append('senderName', senderName);
        params.append('senderEmail', senderEmail);
        params.append('senderSubject', senderSubject);
        params.append('senderMessage', senderMessage);

        fetch('mail/contact.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params.toString()
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                statusMessage.addClass('show')
                statusMessage.removeClass('alert-danger').addClass('alert-success').text(data.success);

                // Refresh page
                setTimeout(function() {
                    window.location.reload();
                }, 5000);
            } else {
                statusMessage.addClass('show')
                statusMessage.removeClass('alert-success').addClass('alert-danger').text(data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            statusMessage.addClass('show')
            statusMessage.removeClass('alert-success').addClass('alert-danger').text("An error occurred. Contact support");
        });
    });
});