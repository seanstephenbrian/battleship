const DOM = () => {

    function createHeader() {
        const body = document.querySelector('body');
        const header = document.createElement('header');
        body.appendChild(header);
        header.innerHTML = `
            <span class="header-letter">b</span class="header-letter">
            <span class="header-letter">a</span class="header-letter">
            <span class="header-letter">t</span class="header-letter">
            <span class="header-letter">t</span class="header-letter">
            <span class="header-letter">l</span class="header-letter">
            <span class="header-letter">e</span class="header-letter">
            <span class="header-letter">s</span class="header-letter">
            <span class="header-letter">q</span class="header-letter">
            <span class="header-letter">u</span class="header-letter">
            <span class="header-letter">a</span class="header-letter">
            <span class="header-letter">r</span class="header-letter">
            <span class="header-letter">e</span class="header-letter">
            <span class="header-letter">s</span class="header-letter">`;
        // add click listeners to each <span> for desktop hover effect:
        const letters = document.querySelectorAll('.header-letter');
        letters.forEach(letter => {
            const letterItself = letter.textContent;
            letter.addEventListener('mouseover', () => {
                if (window.innerWidth > 600) {
                    letter.textContent = '';
                    letter.classList.add('square-effect', 'spin');
                    letter.style.borderColor = generateRandomSiteColor();
                    const boxShadowColor = generateRandomSiteColor();
                    letter.style.boxShadow = `${boxShadowColor} 2px 2px`;
                    letter.style.backgroundColor = generateRandomSiteColor();
                    letter.style.transition = 'transform 0.2s ease-in-out';
                    const randomRotation = Math.floor(Math.random() * 721 - 360); // random # of degrees between -360 and 360
                    letter.style.transform = `rotate(${randomRotation}deg)`;
                }
            });
            letter.addEventListener('mouseout', () => {
                setTimeout(() => {
                    letter.textContent = letterItself;
                    letter.classList.remove('square-effect', 'spin');
                    letter.style.borderColor = '';
                    letter.style.boxShadow = '';
                    letter.style.backgroundColor = '';
                }, 500);
            });
        });
    }

    function generateRandomSiteColor() {
        const colors = [
            '#1aff00', 
            '#1aad0aa8', 
            '#dd1f1fba', 
            '#0b57c1', 
            '#d5d5d5ce', 
            '#89a8d4', 
            '#0047ab', 
            '#96b1c2', 
            '#fa000079', 
            '#d16262',
            '#129303',
            '#ffffffaa',
            '#ff0000',
            '#ff5151',
            '#d67070',
            '#676f7a',
            '#344863',
            '#173157'
        ];
        const randomIndex = Math.floor(Math.random() * (colors.length)) + 1;
        return colors[randomIndex];
    }

    function createGameboardsContainer() {
        const body = document.querySelector('body');
        const gameboards = document.createElement('div');
        body.appendChild(gameboards);
        gameboards.classList.add('gameboards');
    }

    function createGameboards() {
        const gameboards = document.querySelector('.gameboards');

        const playerOneBoard = document.createElement('div');
        playerOneBoard.classList.add('player-one-board', 'gameboard');
        gameboards.appendChild(playerOneBoard);

            const playerOneBoardTitle = document.createElement('div');
            playerOneBoardTitle.classList.add('player-one-board-title', 'board-title');
            playerOneBoardTitle.textContent = 'your grid:';
            playerOneBoard.appendChild(playerOneBoardTitle);

            const playerOneBoardSquares = document.createElement('div');
            playerOneBoardSquares.classList.add('player-one-board-squares', 'board-squares');
            playerOneBoard.appendChild(playerOneBoardSquares);

        const playerTwoBoard = document.createElement('div');
        playerTwoBoard.classList.add('player-two-board', 'gameboard');
        gameboards.appendChild(playerTwoBoard);

            const playerTwoBoardTitle = document.createElement('div');
            playerTwoBoardTitle.classList.add('player-two-board-title', 'board-title');
            playerTwoBoardTitle.textContent = 'enemy grid:'
            playerTwoBoard.appendChild(playerTwoBoardTitle);

            const playerTwoBoardSquares = document.createElement('div');
            playerTwoBoardSquares.classList.add('player-two-board-squares', 'board-squares');
            playerTwoBoard.appendChild(playerTwoBoardSquares);
    }

    function createBoardGrids() {
        const gameboards = document.querySelectorAll('.board-squares');
        gameboards.forEach(board => {
            for (let y = 10; y >= 1; y--) {
                for (let x = 1; x <= 10; x++) {
                    const gameSquare = document.createElement('div');
                    gameSquare.classList.add(`game-square`, `x-${x}`, `y-${y}`, `x${x}-y${y}`);
                    gameSquare.dataset.x = x;
                    gameSquare.dataset.y = y;
                    board.appendChild(gameSquare);
                }
            }
        });
    }

    function createFooter() {
        const body = document.querySelector('body');
        const footer = document.createElement('footer');
        body.appendChild(footer);
        const date = new Date();
        const year = date.getFullYear();
        footer.innerHTML = `copyright © ${year} <a href="https://seanstephenbrian.github.io/ssbbd/" class="ssbbd" target="ssbbd" rel=”noopener”>ssbbd</a>`;
    }

    function createOverlay() {
        const body = document.querySelector('body');
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        body.appendChild(overlay);
    }

    function hideOverlay() {
        const overlay = document.querySelector('.overlay');
        overlay.classList.add('hide');
    }

    function showOverlay() {
        const overlay = document.querySelector('.overlay');
        overlay.classList.remove('hide');
    }

    function createAlert() {
        const body = document.querySelector('body');
        const alertWrapper = document.createElement('div');
        alertWrapper.classList.add('alert-wrapper');
        body.appendChild(alertWrapper);

            const alertWindow = document.createElement('div');
            alertWindow.classList.add('alert-window');
            alertWrapper.appendChild(alertWindow);
    }

    function deleteAlert() {
        const alert = document.querySelector('.alert-wrapper');
        alert.remove();
    }

    function initialize() {
        createHeader();
        createGameboardsContainer();
        createGameboards();
        createBoardGrids();
        createFooter();
        createOverlay();
    }

    function renderShips(player, boardSelector) {
        player.board.ships.forEach(ship => {
            if (ship.orientation === 'x') {
                for (let i = 0; i < ship.length; i++) {
                    const shipSquare = document.querySelector(`${boardSelector} .x${ship.startingSquare[0] + i}-y${ship.startingSquare[1]}`);
                    shipSquare.style.backgroundColor = `var(--ship-bg)`;
                    shipSquare.style.transform = `var(--ship-transform)`;
                    if (i === 0) {
                        shipSquare.style.borderRadius = `var(--ship-border-radius) 0 0 var(--ship-border-radius)`;
                        shipSquare.style.borderTop = `var(--ship-border)`;
                        shipSquare.style.borderRight = 'none';
                        shipSquare.style.borderBottom = `var(--ship-border)`;
                        shipSquare.style.borderLeft = `var(--ship-border)`;
                    } else if (i === ship.length - 1) {
                        shipSquare.style.borderRadius = `0 var(--ship-border-radius) var(--ship-border-radius) 0`;
                        shipSquare.style.borderTop = `var(--ship-border)`;
                        shipSquare.style.borderRight = `var(--ship-border)`;
                        shipSquare.style.borderBottom = `var(--ship-border)`;
                        shipSquare.style.borderLeft = 'none';
                    } else {
                        shipSquare.style.borderTop = `var(--ship-border)`;
                        shipSquare.style.borderRight = 'none';
                        shipSquare.style.borderBottom = `var(--ship-border)`;
                        shipSquare.style.borderLeft = 'none';
                    }
                }
            } else if (ship.orientation === 'y') {
                for (let i = 0; i < ship.length; i++) {
                    const shipSquare = document.querySelector(`${boardSelector} .x${ship.startingSquare[0]}-y${ship.startingSquare[1] + i}`);
                    shipSquare.style.backgroundColor = `var(--ship-bg)`;
                    shipSquare.style.border = `var(--ship-border)`;
                    shipSquare.style.transform = `var(--ship-transform)`;
                    if (i === 0) {
                        shipSquare.style.borderRadius = `0 0 var(--ship-border-radius) var(--ship-border-radius)`;
                        shipSquare.style.borderTop = 'none';
                        shipSquare.style.borderRight = `var(--ship-border)`;
                        shipSquare.style.borderBottom = `var(--ship-border)`;
                        shipSquare.style.borderLeft = `var(--ship-border)`;
                    } else if (i === ship.length - 1) {
                        shipSquare.style.borderRadius = `var(--ship-border-radius) var(--ship-border-radius) 0 0`;
                        shipSquare.style.borderTop = `var(--ship-border)`;
                        shipSquare.style.borderRight = `var(--ship-border)`;
                        shipSquare.style.borderBottom = `none`;
                        shipSquare.style.borderLeft = `var(--ship-border)`;
                    } else {
                        shipSquare.style.borderTop = `none`;
                        shipSquare.style.borderRight = `var(--ship-border)`;
                        shipSquare.style.borderBottom = `none`;
                        shipSquare.style.borderLeft = `var(--ship-border)`;
                    }
                }
            }       
        });
    }

    function renderHits(player, boardSelector) {
        player.board.showHits().forEach(hit => {
            const hitSquare = document.querySelector(`${boardSelector} .x${hit[0]}-y${hit[1]}`);
            hitSquare.innerHTML = '';
            const hitMarker = document.createElement('div');
            hitMarker.classList.add('hit-marker');
            hitSquare.appendChild(hitMarker);
        });
    }

    function renderMisses(player, boardSelector) {
        player.board.showMisses().forEach(miss => {
            const missedSquare = document.querySelector(`${boardSelector} .x${miss[0]}-y${miss[1]}`);
            missedSquare.innerHTML = '';
            const missMarker = document.createElement('div');
            missMarker.classList.add('miss-marker');
            missedSquare.appendChild(missMarker);
        });
    }

    return {
        hideOverlay,
        showOverlay,
        createAlert,
        deleteAlert,
        initialize,
        renderShips,
        renderHits,
        renderMisses
    }
}

export default DOM;