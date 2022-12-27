import Game from "./game";

import '../style.css';

(function createInitialDOMStructure() {


    (function createHeader() {
        const body = document.querySelector('body');
        const header = document.createElement('header');
        body.appendChild(header);
        header.textContent = 'header';
    })();

    (function createGameboardsContainer() {
        const body = document.querySelector('body');
        const gameboards = document.createElement('div');
        body.appendChild(gameboards);
        gameboards.classList.add('gameboards');
    })();

    (function createGameboards() {
        const gameboards = document.querySelector('.gameboards');

        const playerOneBoard = document.createElement('div');
        playerOneBoard.classList.add('player-one-board', 'gameboard');
        gameboards.appendChild(playerOneBoard);

        const playerTwoBoard = document.createElement('div');
        playerTwoBoard.classList.add('player-two-board', 'gameboard');
        gameboards.appendChild(playerTwoBoard);
    })();

    (function createBoardGrids() {
        const gameboards = document.querySelectorAll('.gameboard');
        gameboards.forEach(board => {
            for (let y = 10; y >= 1; y--) {
                for (let x = 1; x <= 10; x++) {
                    const gameSquare = document.createElement('div');
                    gameSquare.classList.add(`game-square`, `${x}-${y}`);
                    gameSquare.textContent = `${x}, ${y}`;
                    board.appendChild(gameSquare);
                }
            }
        });
    })();

    (function createFooter() {
        const body = document.querySelector('body');
        const footer = document.createElement('footer');
        body.appendChild(footer);
        footer.textContent = 'footer';
    })();

    

})();

