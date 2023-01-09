import Gameboard from "./gameboard";

const Player = () => {

    const board = Gameboard();

        // 5 sample ships for testing purposes:
        // board.createShip([2, 3], [3, 3]);
        // board.createShip([3, 7], [3, 10]);
        // board.createShip([5, 5], [7, 5]);
        // board.createShip([6, 9], [10, 9]);
        // board.createShip([9, 2], [9, 4]);

    function attack(otherPlayer, [x, y]) {
        otherPlayer.board.receiveAttack(x, y);
    }

    return { 
        board,
        attack
    }
}

export default Player;