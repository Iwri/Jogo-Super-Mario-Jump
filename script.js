    document.addEventListener('DOMContentLoaded', () => {
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');

    const currentURL = window.location.href;
    console.log("Current URL:", currentURL);

    if(currentURL.includes('jogo')){
        jogo();
    }

    // Função para resetar o jogo
    function resetGame() {
        mario.src = './imagens/mario.gif';
        mario.style.width = '50px';
        mario.style.marginLeft = '0px';
        mario.style.bottom = '0px';
        pipe.style.left = 'initial';
        pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    }

    // Jogo
    function jogo() {
        function jump() {
            if (!mario.classList.contains('jump')) {
                mario.classList.add('jump');
    
                setTimeout(() => {
                    mario.classList.remove('jump');
                }, 500); // Duração da animação
            }
        }
    
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Space' || event.code === 'ArrowUp') {
                jump(); // teclas para pular
            }
        });
    
        // gameover 
        const loop = setInterval(() => {
    
            console.log(`loop`);
    
            const pipePosition = pipe.offsetLeft;
            const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
            console.log(`pipe: ${pipePosition}, mario: ${marioPosition}`);
    
            // Verificação de game over 
            if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
                pipe.style.left = `${pipePosition}px`;
                pipe.style.animation = `none`;
    
                mario.style.animation = `none`;
                mario.style.bottom = `${marioPosition}px`;
    
                // estlização game over do Mario
                mario.src = `./imagens/game-over.png `;
                mario.style.width = `75px`;
                mario.style.marginLeft = `50px`;
    
                clearInterval(loop);
                
                 
            } 
        }, 10);
    }      
});
