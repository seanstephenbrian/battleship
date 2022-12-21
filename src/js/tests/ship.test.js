import Ship from '../ship';

describe('ship sunk status reporting accuracy', () => {

    const testShip = Ship(5);

    test('not sunk if only hit once', () => {
        testShip.hit();
        expect(testShip.isSunk()).toBeFalsy();
    });
    
    test('still not sunk (needs one more hit)', () => {
        testShip.hit();
        testShip.hit();
        testShip.hit();
        expect(testShip.isSunk()).toBeFalsy();
    });

    test('ship sinks when hits === length', () => {
        testShip.hit();
        expect(testShip.isSunk()).toBeTruthy();
    });

});
