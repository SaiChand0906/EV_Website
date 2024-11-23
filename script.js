document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Simulating form submission for demonstration purposes
    alert(`Thank you, ${name}! We have received your message: "${message}"`);
    
    // Clear the form after submission
    document.getElementById('contact-form').reset();
});
