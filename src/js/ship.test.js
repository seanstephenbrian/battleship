import Ship from './ship';

describe('create a ship of length 5', () => {

    const testShip = Ship(5);

    test('not sunk if only hit once', () => {
        testShip.hit();
        expect(testShip.sunk).toBeFalsy;
    });
    
    test('still not sunk (needs one more hit)', () => {
        testShip.hit();
        testShip.hit();
        testShip.hit();
        expect(testShip.sunk).toBeFalsy;
    });

    test('ship sinks when hits === length', () => {
        testShip.hit();
        expect(testShip.sunk).toBeTruthy;
    });

});
