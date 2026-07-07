document.addEventListener("DOMContentLoaded", () => {
   
    // Seleciona todas as barras preenchíveis
    const progressFills = document.querySelectorAll('.progress-fill');
    const skillsSection = document.getElementById('habilidades');


    // Função responsável por aplicar a largura real definida no atributo data-width
    const animateBars = () => {
        progressFills.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth;
        });
    };


    // Configuração do IntersectionObserver para disparar a animação apenas quando visível na tela
    const observerOptions = {
        root: null, // usa o próprio viewport do navegador
        threshold: 0.3 // Dispara a animação quando 30% da seção de habilidades surgir na tela
    };


    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateBars();
                observer.unobserve(entry.target); // Para de observar para rodar a animação apenas uma vez
            }
        });
    }, observerOptions);


    // Começa a monitorar a seção de habilidades
    if(skillsSection) {
        observer.observe(skillsSection);
    }
});
