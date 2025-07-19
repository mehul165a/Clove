document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.consultation-form form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted successfully!');
            form.reset();
        });
    }

    const statsTrack = document.querySelector('.stats-track');
    if (statsTrack) {
        const statsItems = statsTrack.innerHTML;
        statsTrack.innerHTML = statsItems + statsItems;
    }
});

document.querySelectorAll('.treatment-card__button button').forEach(button => {
    button.addEventListener('click', function() {
        const treatmentName = this.closest('.treatment-card').querySelector('h3').textContent;
        alert(`Free consultation requested for: ${treatmentName}`);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const testimonialsTrack = document.querySelector('.testimonials-track');
    if (testimonialsTrack) {
        const testimonials = testimonialsTrack.innerHTML;
        testimonialsTrack.innerHTML = testimonials + testimonials;
        
        testimonialsTrack.addEventListener('animationiteration', function() {
            this.style.animation = 'none';
            void this.offsetWidth; 
            this.style.animation = 'scroll 30s linear infinite';
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.querySelector('.appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const captcha = this.querySelector('.captcha-input input').value;
            const termsChecked = this.querySelector('#terms-check').checked;
 
            if (!name || !phone || !captcha) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!termsChecked) {
                alert('Please agree to the terms and conditions');
                return;
            }
            
            if (captcha !== '1514') {
                alert('Invalid captcha code');
                return;
            }
            alert(`Thank you, ${name}! Your appointment request has been received. We will contact you shortly at ${phone}.`);
            this.reset();
        });
    }
});