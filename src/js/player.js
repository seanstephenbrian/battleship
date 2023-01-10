import Gameboard from "./gameboard";

const Player = () => {

    const board = Gameboard();

    function attack(otherPlayer, [x, y]) {
        otherPlayer.board.receiveAttack(x, y);
    }

    return { 
        board,
        attack
    }
}

export default Player;