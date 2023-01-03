import Player from "./player";

const Game = () => {

    // create two new players:
    const playerOne = Player();
    const playerTwo = Player();
    // (these players' ships have been placed at the same sample coordinates for testing purposes)

    return {
        playerOne,
        playerTwo
    }
}

export default Game;