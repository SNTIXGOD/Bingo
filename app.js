// Toggle menú móvil
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('active'); // Cerrar menú móvil al hacer clic
    });
});

// Modal de WhatsApp
const whatsappButtons = document.querySelectorAll('.whatsapp, .whatsapp-float');
const modal = document.getElementById('copy-modal');
const closeModal = document.getElementById('close-modal');
const numberInput = document.getElementById('whatsapp-number');
const copyButton = document.getElementById('copy-button');
const copyFeedback = document.getElementById('copy-feedback');

whatsappButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const number = button.dataset.number;
        numberInput.value = number;
        modal.style.display = 'flex';
        copyFeedback.textContent = '';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

copyButton.addEventListener('click', () => {
    numberInput.select();
    numberInput.setSelectionRange(0, 99999); // Para móviles

    try {
        navigator.clipboard.writeText(numberInput.value).then(() => {
            copyFeedback.textContent = '¡Copiado!';
            setTimeout(() => {
                copyFeedback.textContent = '';
            }, 2000);
        });
    } catch (err) {
        copyFeedback.textContent = 'Error al copiar';
    }
});
