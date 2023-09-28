const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Hide the status messages
    const successSend = document.getElementById('successSend'),
          failedSend = document.getElementById('failedSend');
    successSend.style.display = 'none';
    failedSend.style.display = 'none';
    // Send Email and show the status
    emailjs.sendForm('portfolio_contact', 'contact_form', this)
            .then(function() {
                successSend.style.display = 'block';
            }, function(error) {
                failedSend.style.display = 'block';
            });
});