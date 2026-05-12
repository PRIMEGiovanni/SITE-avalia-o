document.addEventListener('DOMContentLoaded', function() {

    // Validação simples do formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Por favor, preencha todos os campos.');
                event.preventDefault(); // Impede o envio do formulário
            } else {
                // Aqui você pode adicionar lógica para enviar os dados do formulário
                // Por exemplo, usando Fetch API para enviar para um backend.
                // Por enquanto, apenas mostramos uma mensagem de sucesso.
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                // Opcional: Limpar o formulário após o envio
                // contactForm.reset();
            }
        });
    }

    // Opcional: Animação sutil ao rolar (scroll) para seções
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50; // 50px de margem acima
            const screenHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + section.offsetHeight) {
                // Você pode adicionar classes para animar elementos aqui se quiser
                // Exemplo: section.classList.add('in-view');
            }
        });
    });

});
