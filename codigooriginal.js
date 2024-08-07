document.addEventListener('DOMContentLoaded', () => {
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');

    // Menu do jogo  
    document.getElementById('start').addEventListener('click', function() {
       console.log(123)
    });
    


    // Jogo

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

        console.log(`loop`)

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        console.log(marioPosition);

        // Verificação de game over 
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition <80) {
            pipe.style.left = `${pipePosition}px`;
            pipe.style.animation = `none`;

            mario.style.animation = `none`
            mario.style.bottom = `${marioPosition}px`;

            // estlização game over do Mario
            mario.src = `./imagens/game-over.png `
            mario.style.width = `75px`
            mario.style.marginLeft = `50px`

            clearInterval(loop)
        } 
    }, 10);
});

