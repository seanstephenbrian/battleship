import Player from "./player";

const Game = () => {

    // create two new players:
    const playerOne = Player();
    const playerTwo = Player();
    // (these players' ships have been placed at the same sample coordinates for testing purposes)

    // run game loop while neither player's ships have all sunk:
    // while (playerOne.board.allSunk() === false && playerTwo.board.allSunk() === false) {

    // }

    

    return {
        playerOne,
        playerTwo
    }
}

export default Game;