document.addEventListener('DOMContentLoaded', function() {

    // Menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navUl = document.querySelector('header nav ul');

    if (mobileMenuButton && navUl) {
        mobileMenuButton.addEventListener('click', () => {
            navUl.classList.toggle('show');
        });
    }

    // Animação de scroll no cabeçalho
    const header = document.querySelector('header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Mude 50 para a altura que desejar para ativar a animação
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Animação ao rolar para elementos visíveis (Opcional - se quiser mais animações)
    const animatedElements = document.querySelectorAll('section, .service-item, .about-content, .about-image, .contact-section form');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Para que a animação ocorra apenas uma vez
            }
        });
    }, {
        threshold: 0.1 // Começa a animar quando 10% do elemento está visível
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

});

// Adicionar CSS para a animação de entrada
// Você pode adicionar isso diretamente no CSS ou de forma dinâmica se preferir
// Exemplo:
/*
.hero-content, .about-content, .service-item, .contact-section form {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.is-visible {
    opacity: 1;
    transform: translateY(0);
}
*/
