// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message sent!');
        form.reset();
    });
});
