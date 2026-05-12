document.addEventListener('DOMContentLoaded', function() {

    // Inicialização do AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Duração da animação em milissegundos
        once: true,     // Animar apenas uma vez
        offset: 100     // Deslocamento em pixels antes de ativar a animação
    });

    // Validação simples do formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio padrão

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            // Validação básica
            if (name === '' || email === '' || message === '') {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return; // Sai da função se houver campos vazios
            }

            // Validação de email simples
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Por favor, insira um endereço de email válido.');
                return;
            }

            // Simulação de envio de formulário (em um site real, você enviaria para um backend)
            alert('Mensagem enviada com sucesso! Agradecemos seu contato e retornaremos em breve.');

            // Limpar o formulário após o envio bem-sucedido
            contactForm.reset();
        });
    }

    // Funcionalidade do Menu Mobile
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navUl = document.querySelector('header nav ul');

    if (mobileNavToggle && navUl) {
        mobileNavToggle.addEventListener('click', () => {
            navUl.classList.toggle('active'); // Adiciona/remove a classe 'active'
            mobileNavToggle.querySelector('i').classList.toggle('fa-bars'); // Troca ícone
            mobileNavToggle.querySelector('i').classList.toggle('fa-times'); // Troca ícone
        });

        // Fecha o menu ao clicar em um link de navegação
        const navLinks = document.querySelectorAll('header nav ul li a.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navUl.classList.contains('active')) {
                    navUl.classList.remove('active');
                    mobileNavToggle.querySelector('i').classList.toggle('fa-bars');
                    mobileNavToggle.querySelector('i').classList.toggle('fa-times');
                }
            });
        });
    }

    // Adicionar/Remover classe 'active' para o menu mobile (precisa de CSS correspondente)
    const cssForMobileMenu = `
        @media (max-width: 768px) {
            header nav ul.active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%; /* Logo abaixo do header */
                left: 0;
                width: 100%;
                background-color: var(--white);
                padding: 20px 0;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                z-index: 999;
            }
            header nav ul.active li {
                margin: 10px 0;
                text-align: center;
            }
            header nav ul.active li a {
                display: block;
                padding: 10px 0;
            }
        }
    `;
    // Injeção dinâmica do CSS para o menu mobile.
    // Alternativamente, você pode colocar isso no seu arquivo style.css.
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = cssForMobileMenu;
    document.head.appendChild(styleSheet);

});
