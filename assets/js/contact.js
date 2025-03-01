const notyf = new Notyf({
  position: {
    x: 'right',
    y: 'top',
  },
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_wcdnly4', 'template_49twbg8', this)
    .then(
      function(response) {
        notyf.success('Your message has been sent successfully!');
        console.log('SUCCESS!', response.status, response.text);
      },
      function(error) {
        notyf.error('Failed to send the message. Please try again later.');
        console.log('FAILED...', error);
      }
    );
}); 