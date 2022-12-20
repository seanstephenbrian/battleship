import Gameboard from "./gameboard";

describe('showMisses() and showHits() reporting accuracy', () => {

    const testBoard = Gameboard();

    // create a ship from (2, 2) to (6, 2):
    testBoard.createShip([2, 2], [6, 2]);

    // create a ship from (8, 3) to (8, 5):
    testBoard.createShip([8, 3], [8, 5]);

    // add several hits & misses:
    testBoard.receiveAttack(1, 1); // MISS
    testBoard.receiveAttack(2, 2); // HIT
    testBoard.receiveAttack(8, 4); // HIT
    testBoard.receiveAttack(2, 8); // MISS
    testBoard.receiveAttack(3, 9); // MISS

    test('show missed attacks', () => {
        expect(testBoard.showMisses()).toStrictEqual([[1, 1], [2, 8], [3, 9]]);
    });

    test('show hits', () => {
        expect(testBoard.showHits()).toStrictEqual([[2, 2], [8, 4]]);
    });

});

describe('allSunk() reporting accuracy', () => {

    const testBoard = Gameboard();

    // create 5 ships:
    testBoard.createShip([2, 3], [3, 3]);
    testBoard.createShip([3, 7], [3, 10]);
    testBoard.createShip([5, 5], [7, 5]);
    testBoard.createShip([6, 9], [10, 9]);
    testBoard.createShip([9, 2], [9, 4]);

    testBoard.receiveAttack(2, 3);
    testBoard.receiveAttack(3, 3);

    testBoard.receiveAttack(6, 5);
    testBoard.receiveAttack(7, 5);

    testBoard.receiveAttack(9, 4);

    testBoard.receiveAttack(3, 7);
    testBoard.receiveAttack(3, 9);
    testBoard.receiveAttack(3, 10);

    testBoard.receiveAttack(6, 9);
    testBoard.receiveAttack(7, 9);
    testBoard.receiveAttack(10, 9);

    test('report not all ships sunk', () => {
        expect(testBoard.allSunk()).toBeFalsy();
    });

    test('report all ships sunk', () => {

        // attack the remaining squares:
        testBoard.receiveAttack(5, 5);

        testBoard.receiveAttack(9, 2);
        testBoard.receiveAttack(9, 3);

        testBoard.receiveAttack(3, 8);

        testBoard.receiveAttack(8, 9);
        testBoard.receiveAttack(9, 9);

        expect(testBoard.allSunk()).toBeTruthy();
    });
});