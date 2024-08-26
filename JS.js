
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navToggle = document.createElement('button');
    navToggle.classList.add('nav-toggle');
    navToggle.textContent = '☰';
    
    nav.insertAdjacentElement('beforebegin', navToggle);
    
    navToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
});

// Form validation for booking page
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                event.preventDefault();
                alert('Please fill in all required fields.');
            } else if (!validateEmail(email)) {
                event.preventDefault();
                alert('Please enter a valid email address.');
            }
        });
    }
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            if (this.hash !== '') {
                event.preventDefault();
                
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});
