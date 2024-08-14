document.addEventListener('DOMContentLoaded', () => {
    const mario = document.querySelector('.mario');
    var pipe = [];
    pipe[0] = document.querySelector('.pipe');
    pipe[1] = document.querySelector('.pipe2');
    const currentURL = window.location.href;
    console.log("Current URL:", currentURL);

    audioGame = new Audio('./som/audio_theme.mp3')


    if(currentURL.includes('jogo')){
        jogo();
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
            audioGame.play()
        }
    
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Space' || event.code === 'ArrowUp') {
                jump(); // teclas para pular
            }
        });
    
        // gameover 
        const loop = setInterval(() => {
    
            console.log(`loop`);
    
            pipe.forEach((pipeElement) => {
                const pipePosition = pipeElement.offsetLeft;
                const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
                console.log(`pipe: ${pipePosition}, mario: ${marioPosition}`);
                
                // Verificação de game over 
                if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
                    pipeElement.style.left = `${pipePosition}px`;
                    pipeElement.style.animation = `none`;
    
                    mario.style.animation = `none`;
                    mario.style.bottom = `${marioPosition}px`;
    
                    // estlização game over do Mario
                    mario.src = `./imagens/game-over.png`;
                    mario.style.width = `75px`;
                    mario.style.marginLeft = `50px`;
                    
                    clearInterval(loop);                                    
                }
            });
        }, 10);
    }      
});
