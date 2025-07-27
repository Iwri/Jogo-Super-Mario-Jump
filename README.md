# Super Mario Jump (SFML)

![Linguagem](https://img.shields.io/badge/Linguagem-C%2B%2B-blue.svg)
![Framework](https://img.shields.io/badge/Framework-SFML-green.svg)
![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen.svg)

Um clone simples e divertido do clássico jogo de pular do Mario, desenvolvido em C++ com a biblioteca gráfica **SFML (Simple and Fast Multimedia Library)**.

##  Gameplay

O objetivo do jogo é controlar o Mario, fazendo-o pular para desviar dos canos que vêm em sua direção e coletar o máximo de moedas possível para aumentar sua pontuação. O jogo continua até que o Mario colida com um dos canos.

### Controles
* **Barra de Espaço:** Pular

## ✨ Funcionalidades

* Movimentação e pulo do personagem.
* Geração procedural de obstáculos (canos) em alturas variadas.
* Sistema de pontuação com moedas colecionáveis.
* Detecção de colisão (AABB - Axis-Aligned Bounding Box).
* Renderização de sprites e animação básica.
* Exibição de pontuação e mensagem de "Game Over" na tela.

## 🛠️ Tecnologias e Bibliotecas

* **C++:** Linguagem principal do projeto.
* **SFML 2.5.1:** Uma biblioteca de multimídia simples e multiplataforma usada para gerenciar a janela, renderização, eventos e texturas.

## 🚀 Como Compilar e Executar

Para compilar e executar este projeto, você precisa ter a biblioteca **SFML** instalada e configurada no seu sistema.

**1. Clone o repositório:**
```bash
git clone [https://github.com/Iwri/Jogo-Super-Mario-Jump.git](https://github.com/Iwri/Jogo-Super-Mario-Jump.git)
cd Jogo-Super-Mario-Jump
```

**2. Compile o código:**

O comando de compilação pode variar dependendo do seu sistema operacional e de como você instalou a SFML.

*Exemplo de compilação no Linux (assumindo que a SFML foi instalada via gerenciador de pacotes):*
```bash
g++ main.cpp -o mario_jump -lsfml-graphics -lsfml-window -lsfml-system
```

**3. Execute o jogo:**
```bash
./mario_jump
```

## 🧠 Aprendizados

Este projeto foi uma ótima oportunidade para aprender os fundamentos do desenvolvimento de jogos 2D:
* **Game Loop:** Entender e implementar o loop principal que atualiza a lógica e renderiza os frames do jogo.
* **Gerenciamento de Estado:** Controlar os diferentes estados do jogo (jogando, game over).
* **Física Simples:** Implementar a gravidade e a força do pulo.
* **Detecção de Colisão:** Aprender a lógica de detecção de colisão entre retângulos (sprites).
* **Uso de uma Biblioteca Gráfica:** Ganhar experiência prática com a SFML para manipulação de janelas, sprites, texturas e eventos de usuário.
