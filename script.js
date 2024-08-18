document.addEventListener('DOMContentLoaded', () => {
    const mario = document.querySelector('.mario');
    const pipe1 = document.querySelector('.pipe');
    const pipe2 = document.querySelector('.pipe2');
    const currentURL = window.location.href;

    const audioGame = new Audio('./som/audio_theme.mp3');

    if (currentURL.includes('jogo')) {
        jogo();
    }

    function jogo() {
        const delayBetweenPipes = 2; // Tempo em segundos entre os pipes

        // Aplicar delay para cada pipe
        pipe1.style.animationDelay = '0s';
        pipe2.style.animationDelay = `${delayBetweenPipes}s`;
        pipe1.style.animationDuration = '4s'; // Ajuste para aumentar ou diminuir a difculdade
        pipe2.style.animationDuration = '4s';

        function jump() {
            if (!mario.classList.contains('jump')) {
                mario.classList.add('jump');

                setTimeout(() => {
                    mario.classList.remove('jump');
                }, 500); // Duração da animação
            }
            audioGame.play();
        }

        document.addEventListener('keydown', (event) => {
            if (event.code === 'Space' || event.code === 'ArrowUp') {
                jump(); // teclas para pular
            }
        });

        // gameover para o primeiro pipe
        const loopPipe1 = setInterval(() => {
            const pipe1Position = pipe1.offsetLeft;
            const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
            
            if (pipe1Position <= 120 && pipe1Position > 0 && marioPosition < 80) {
                pipe1.style.left = `${pipe1Position}px`;
                pipe1.style.animation = 'none';

                mario.style.animation = 'none';
                mario.style.bottom = `${marioPosition}px`;

                mario.src = `./imagens/game-over.png`;
                mario.style.width = '75px';
                mario.style.marginLeft = '50px';

                clearInterval(loopPipe1);
                clearInterval(loopPipe2); // Parar o loop do segundo pipe 
            }
        }, 10);

        // gameover para o segundo pipe
        const loopPipe2 = setInterval(() => {
            const pipe2Position = pipe2.offsetLeft;
            const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

            if (pipe2Position <= 40 && pipe2Position > 0 && marioPosition < 80) {
                pipe2.style.left = `${pipe2Position}px`;
                pipe2.style.animation = 'none';

                mario.style.animation = 'none';
                mario.style.bottom = `${marioPosition}px`;

                mario.src = `./imagens/game-over.png`;
                mario.style.width = '75px';
                mario.style.marginLeft = '50px';

                clearInterval(loopPipe2);
                clearInterval(loopPipe1); // Parar o loop do primeiro pipe 
            }
        }, 10);
    }
});
