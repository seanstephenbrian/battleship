import Game from '../game';

// create test game:
const testGame = Game();

// tests to confirm that we will be able to correct render the ships to a DOM gameboard display:
describe('access ship length/orientation info', () => {

    test('read ship starting square', () => {
        expect(testGame.playerOne.board.ships[0].startingSquare).toStrictEqual([2, 3]);
    });
    
    test('read ship orientation', () => {
        expect(testGame.playerOne.board.ships[0].orientation).toBe('x');
    });
    
    test('read ship length', () => {
        expect(testGame.playerOne.board.ships[0].length).toBe(2);
    });
    
});

// tests related to player attacks:
describe('correctly identify player hits/misses', () => {

    test('show missed attack', () => {
        testGame.playerOne.attack(testGame.playerTwo, [1, 1]);
        expect(testGame.playerTwo.board.showMisses()).toStrictEqual([[1, 1]]);
    });

});