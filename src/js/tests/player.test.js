import Player from "../player";

// create two players for testing purposes:
const playerOne = Player();
const playerTwo = Player();

describe('successfully record player attacks', () => {

    test('one player attacks another and misses', () => {
        playerOne.attack(playerTwo, [1, 1]);
        expect(playerTwo.board.showMisses()).toStrictEqual([[1, 1]]);
    });
    
    test('one player attacks another and hits', () => {
        playerOne.attack(playerTwo, [6, 5]);
        playerOne.attack(playerTwo, [9, 2]);
        expect(playerTwo.board.showHits()).toStrictEqual([[6, 5], [9, 2]]);
    });
});

describe('correctly recognize when all ships have sunk', () => {

    test('player two ships are NOT all sunk', () => {
        expect(playerTwo.board.allSunk()).toBeFalsy();
    });

    test('player two ships ARE all sunk', () => {
        playerOne.attack(playerTwo, [2, 3]);
        playerOne.attack(playerTwo, [3, 3]);
        playerOne.attack(playerTwo, [3, 7]);
        playerOne.attack(playerTwo, [3, 8]);
        playerOne.attack(playerTwo, [3, 9]);
        playerOne.attack(playerTwo, [3, 10]);
        playerOne.attack(playerTwo, [5, 5]);
        playerOne.attack(playerTwo, [7, 5]);
        playerOne.attack(playerTwo, [9, 3]);
        playerOne.attack(playerTwo, [9, 4]);
        playerOne.attack(playerTwo, [6, 9]);
        playerOne.attack(playerTwo, [7, 9]);
        playerOne.attack(playerTwo, [8, 9]);
        playerOne.attack(playerTwo, [9, 9]);
        playerOne.attack(playerTwo, [10, 9]);
        
        expect(playerTwo.board.allSunk()).toBeTruthy();
    });
})