import domMethods from "./dom-methods";
import Game from "./game";
import '../style.css';

(function playGame() {

    let currentGame = null;

    const DOM = domMethods();

    DOM.initialize();

    (function alertNewGame() {
        DOM.createAlert();
        const alert = document.querySelector('.alert-window');
        alert.classList.add('new-game-alert');

            const title = document.createElement('div');
            title.classList.add('alert-title', 'new-game-title');
            title.textContent = 'welcome to BATTLESHIP';
            alert.appendChild(title);

            const startButton = document.createElement('div');
            startButton.classList.add('start-button', 'button');
            startButton.textContent = 'start game';
            alert.appendChild(startButton);

        startButton.addEventListener('click', startGame);
    })();

    function startGame() {
        DOM.deleteAlert();
        DOM.hideOverlay();

        // create the new game:
        currentGame = Game();

        // ADD METHOD TO ALLOW USER TO CHOOSE SHIP POSITIONS HERE

        renderBoard();

        getPlayerMove();
    }

    function renderBoard() {
        const playerOne = currentGame.playerOne;
        const playerTwo = currentGame.playerTwo;

        DOM.renderShips(playerOne, '.player-one-board-squares');

        DOM.renderHits(playerOne, '.player-one-board-squares');
        DOM.renderHits(playerTwo, '.player-two-board-squares');

        DOM.renderMisses(playerOne, '.player-one-board-squares');
        DOM.renderMisses(playerTwo, '.player-two-board-squares');
    }

    function getPlayerMove() {
        const playerTwoTitle = document.querySelector('.player-two-board-title');
        const playerTwoBoard = document.querySelector('.player-two-board-squares');

        playerTwoTitle.classList.add('attack-prompt');
        playerTwoTitle.textContent = 'CHOOSE A SQUARE TO ATTACK:';

        playerTwoBoard.style.cursor = 'pointer';
        playerTwoBoard.addEventListener('click', chooseSquare);
    }

    function chooseSquare(e) {
        const clickedSquare = e.target;
        const xCoord = parseInt(clickedSquare.dataset.x);
        const yCoord = parseInt(clickedSquare.dataset.y);
        attemptAttack(xCoord, yCoord);
    }

    function attemptAttack(x, y) {
        const targetSquare = currentGame.playerTwo.board.findSquare(x, y);
        // make sure that the square hasn't been attacked yet:
        if (targetSquare.attacked === false) {
            // remove 'CHOOSE A SQUARE' styling:
            const playerTwoTitle = document.querySelector('.player-two-board-title');
            playerTwoTitle.classList.remove('attack-prompt');
            playerTwoTitle.textContent = 'enemy grid:'
            // then complete the attack:
            currentGame.playerOne.attack(currentGame.playerTwo, [x, y]);
            // re-render the board to show the new attack:
            renderBoard();
            // remove click listeners from the enemy board:
            const playerTwoBoard = document.querySelector('.player-two-board-squares');
            playerTwoBoard.removeEventListener('click', chooseSquare);
            // and remove pointer style from enemy board:
            playerTwoBoard.style.cursor = 'default';
            // check to see if all the enemy's ships have sunk:
            if (currentGame.playerTwo.board.allSunk() === true) {
                alert('player one wins!');
            }
            // if not, let the player know the computer is generating an attack:
            const playerOneTitle = document.querySelector('.player-one-board-title');
            playerOneTitle.classList.add('attack-prompt');
            playerOneTitle.textContent = 'ATTACK INCOMING . . .';            
            // then receive a random attack on player's own board:
            setTimeout(receiveAttack, 2000);
        }
    }

    function receiveAttack() {

        let attackX;
        let attackY;

        // if there are squares in the queue, attack the first one:
        if (attackQueue.queue.length >= 1) {
            const square = attackQueue.getNextAttack();
            attackX = square.x;
            attackY = square.y;
        } else {
            // otherwise get a random square to potentially attack:
            const randomX = Math.floor(Math.random() * 10 + 1);
            const randomY = Math.floor(Math.random() * 10 + 1);
            const randomSquare = currentGame.playerOne.board.findSquare(randomX, randomY);
            // if the square has already been attacked, run the function again:
            if (randomSquare.attacked === true) {
                receiveAttack();
                return;
            // if it hasn't yet been attacked, set the random X/Y as the attack coordinates:
            } else if (randomSquare.attacked === false) {
                attackX = randomX;
                attackY = randomY;
            }
        }

        // remove 'ATTACK INCOMING' message:
        const playerOneTitle = document.querySelector('.player-one-board-title');
        playerOneTitle.classList.remove('attack-prompt');
        playerOneTitle.textContent = 'your grid:';

        // complete attack:
        currentGame.playerTwo.attack(currentGame.playerOne, [attackX, attackY]);

        // if it's a hit, check adjacent squares to add to the attack queue:
        if (currentGame.playerOne.board.findSquare(attackX, attackY).ship 
         && currentGame.playerOne.board.findSquare(attackX, attackY).attacked === true) {
            attackQueue.checkSquare(attackX, attackY);
        }
        // then re-render the board to show the new attack:
        renderBoard();
        // check to see if all the player's ships have sunk:
        if (currentGame.playerOne.board.allSunk() === true) {
            alert('computer wins');
        }
        // if not, get the player's next move:
        getPlayerMove();
        
    }

    const attackQueue = (function () {

        let queue = [];

        function checkSquare(x, y) {

            const squareAbove = currentGame.playerOne.board.findSquare(x, y + 1);
            const squareRight = currentGame.playerOne.board.findSquare(x + 1, y);
            const squareBelow = currentGame.playerOne.board.findSquare(x, y - 1);
            const squareLeft = currentGame.playerOne.board.findSquare(x - 1, y);
            
            if (squareAbove && squareAbove.attacked === false) {
                queue.push(squareAbove);
            }
            if (squareRight && squareRight.attacked === false) {
                queue.push(squareRight);
            }
            if (squareBelow && squareBelow.attacked === false) {
                queue.push(squareBelow);
            }
            if (squareLeft && squareLeft.attacked === false) {
                queue.push(squareLeft);
            }
        }

        function getNextAttack() {
            return queue.shift();
        }

        return {
            queue,
            checkSquare,
            getNextAttack
        }

    })();

})();