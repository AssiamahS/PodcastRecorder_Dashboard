document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    // Here, add your code to send the email to your backend service
    alert(`Thank you for subscribing with ${email}!`);
});
