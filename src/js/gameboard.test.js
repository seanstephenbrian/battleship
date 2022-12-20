import Gameboard from "./gameboard";

describe('create test gameboard', () => {

    const testBoard = Gameboard();

    // create a ship from (2, 2) to (6, 2):
    testBoard.createShip([2, 2], [6, 2]);

    // create a ship from (8, 3) to (8, 5):
    testBoard.createShip([8, 3], [8, 5]);

    // add several hits & misses here:
    testBoard.receiveAttack(1, 1); // MISS
    testBoard.receiveAttack(2, 2); // HIT
    testBoard.receiveAttack(8, 4); // HIT
    testBoard.receiveAttack(2, 8); // MISS
    testBoard.receiveAttack(3, 9); // MISS

    test('show missed attacks', () => {
        expect(testBoard.showMisses).toBe([[1, 1], [2, 8], [3, 9]]);
    });

    test('show hits', () => {
        expect(testBoard.showHits).toBe([[2, 2], [8, 4]]);
    });

    test.todo('report that not all ships have been sunk', () => {
        expect(testBoard.allSunk).toBeFalsy;
    });

    // add hits to take down all the ships.

    test.todo('report that all ships have been sunk', () => {
        expect(testBoard.allSunk).toBeTruth;
    });
});