import Player from "./player";

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

    test('player two ships are not all sunk', () => {

    });
})