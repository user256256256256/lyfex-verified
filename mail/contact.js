// contact Js validation

const senderName = document.getElementById('name')
const senderEmail = document.getElementById('email') 
const senderSubject = document.getElementById('subject') 
const senderMessage = document.getElementById('message')
const sendMessageButton = document.getElementById('sendMessageButton') 

sendMessageButton.addEventListener('click', (e)=> {
    e.preventDefault()

    const statusMessage = document.getElementById('status-message')

    const params = new URLSearchParams()
    params.append('senderName', senderName.value.trim())
    params.append('senderEmail', senderEmail.value.trim())
    params.append('senderSubject', senderSubject.value.trim())
    params.append('senderMessage', senderMessage.value.trim())


    
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


