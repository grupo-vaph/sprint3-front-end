document.addEventListener("DOMContentLoaded", () => {

    // form de contato
    const form = document.querySelector('.contato-form-card form');
    const btnSubmit = document.querySelector('.btn-submit');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // nao deixa recarregar a pagina
            form.reset(); // limpa os inputs
            
            // feedback visual pro usuario
            const textoOriginal = btnSubmit.innerText;
            btnSubmit.innerText = "Mensagem Enviada!";
            btnSubmit.style.backgroundColor = "#16A34A"; 
            
            // volta ao normal dps de 3s
            setTimeout(() => {
                btnSubmit.innerText = textoOriginal;
                btnSubmit.style.backgroundColor = ""; 
            }, 3000); 
        });
    }

    // efeito de flutuar nos cards (equipe e publico alvo)
    const cardsFlutuantes = document.querySelectorAll('.membro-card, .stat-card');

    cardsFlutuantes.forEach(card => {
        card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

        // mouse em cima
        card.addEventListener('mouseenter', () => {
            card.style.transform = "translateY(-10px)";
            card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
        });

        // tira o mouse
        card.addEventListener('mouseleave', () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = ""; 
        });
    });

    // logica da galeria
    const recursoItems = document.querySelectorAll('.recurso-item');
    const imagemGaleria = document.querySelector('.galeria-imagem img');

    // TODO: lembrar de colocar os caminhos das imagens certas aqui depois
    const imagensGaleria = [
        "./src/assets/img/galeria-scanner.jpg",
        "./src/assets/img/galeria-ia.jpg",
        "./src/assets/img/galeria-pasta.jpg",
        "./src/assets/img/galeria-pet.jpg"
    ];

    if (imagemGaleria) {
        imagemGaleria.style.transition = "opacity 0.3s ease";
    }

    recursoItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            
            // reseta as classes e ativa so o card clicado
            recursoItems.forEach(i => i.classList.remove('ativo'));
            item.classList.add('ativo');

            // troca a imagem do lado com um efeito de fade
            if (imagemGaleria) {
                imagemGaleria.style.opacity = 0; 
                
                setTimeout(() => {
                    imagemGaleria.src = imagensGaleria[index]; 
                    imagemGaleria.style.opacity = 1; 
                }, 300); 
            }
        });
    });

});