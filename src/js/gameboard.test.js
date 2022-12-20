import Gameboard from "./gameboard";

describe('create test gameboard', () => {

    const testBoard = Gameboard();

    // add several hits & misses here

    test('show missed attacks', () => {
        // expect(testBoard.showMisses).toBe(LIST COORDINATES OF MISSES HERE);
    });

    test('show hits', () => {
        // expect(testBoard.showHits).toBe(LIST COORDINATES OF HITS HERE);
    });

    test('report that not all ships have been sunk', () => {
        expect(testBoard.allSunk).toBeFalsy;
    });

    // add hits to take down all the ships.

    test('report that all ships have been sunk', () => {
        expect(testBoard.allSunk).toBeTruth;
    });
});