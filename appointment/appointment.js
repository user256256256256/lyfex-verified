//  Js validation

const clientName = document.getElementById('name')
const clientEmail = document.getElementById('email') 
const clientMobileContact = document.getElementById('subject') 
const clientAddress = document.getElementById('address')
const clientWhContact = document.getElementById('wh-contact')
const clientAge = document.getElementById('age')
const clientScheduledtime = document.getElementById('schedule')
const clientLeadLocation = document.getElementById('lead-location')
const clientMessage = document.getElementById('message')
const privacyPolicy = document.getElementById('privacy-policies')

const sendMessageButton = document.getElementById('sendMessageButton') 

sendMessageButton.addEventListener('click', (e)=> {
    e.preventDefault()
    if(!privacyPolicy.checked) {
        privacyPolicy.nextElementSibling.textContent = 'Please verify privacy policies';
    }
    
    const words = clientMessage.value.trim().split(/\s+/)
    const wordCount = words.length;
    if (wordCount > 255) {
        privacyPolicy.nextElementSibling.textContent = 'Use less than 255 words';
    }

    const statusMessage = document.getElementById('status-message')

    const params = new URLSearchParams()
    params.append('clientName', clientName.value.trim());
    params.append('clientEmail', clientEmail.value.trim());
    params.append('clientMobileContact', clientMobileContact.value.trim());
    params.append('clientAddress', clientAddress.value.trim());
    params.append('clientWhContact', clientWhContact.value.trim());
    params.append('clientAge', clientAge.value.trim());
    params.append('clientScheduledTime', clientScheduledtime.value);
    params.append('clientLeadLocation', clientLeadLocation.value);
    params.append('clientMessage', clientMessage.value);
    params.append('privacyPolicy', privacyPolicy.checked ? 'true' : 'false');

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
            statusMessage.classList.add('text-success')
            statusMessage.textContent = data.success
        } else {
            statusMessage.classList.add('text-danger')
            statusMessage.textContent = data.error
        }
    })
    .catch(error => {
        console.error('Error', error)
    })

})


