import Square from "./square";
import Ship from "./ship";

const Gameboard = () => {

    // initialize empty array to hold references to all board squares:
    let gameSquares = [];

    // initialize empty array to hold references to all created ships:
    let ships = [];

    // initialize empty set to track the successful hits:
    const hits = new Set();

    // initialize empty set to track misses:
    const misses = new Set();

    // initialize variable to track whether all ships have been sunk:
    let allSunk = false;

    // create 10x10 grid:
    for (let x = 1; x <= 10; x++) {
        for (let y = 1; x<= 10; x++) {
            const newSquare = Square(x, y);
            gameSquares.push(newSquare);
        }
    }

    // return a reference to a gameboard square based on its x & y coordinates:
    function findSquare(x, y) {
        gameSquares.forEach(square => {
            if (square.x === x) {
                if (square.y === y) return square;
            }
        })
    }

    // create a ship of the appropriate length given its starting & ending coordinates:
    function createShip([x, y], [x2, y2]) {
        let length;
        // if x coordinates are the same, set length to difference between y coordinates:
        if (x === x2 && (1 < Math.abs(y - y2) < 6)) {
            length = Math.abs(y - y2);
        // if y coords are the same, set length to difference between x coords:
        } else if (y === y2 && (1 < Math.abs(x - x2) < 6)) {
            length = Math.abs(x - x2);
        } else {
            return;
        }

        const newShip = Ship(length);

        // update gameboard squares to reference the ship:
        if (x === x2 && y < y2) {
            for (let z = y; z <= y2; z++) {
                let square = findSquare(x, z);
                square.ship = newShip;
            }
        } else if (x === x2 && y > y2) {
            for (let z = y2; z <= y; z++) {
                let square = findSquare(x, z);
                square.ship = newShip;
            }
        } else if (y === y2 && x < x2) {
            for (let z = x; z <= x2; z++) {
                let square = findSquare(x, z);
                square.ship = newShip;
            }
        } else if (y === y2 && x > x2) {
            for (let z = x2; z <= x; z++) {
                let square = findSquare(x, z);
                square.ship = newShip;
            }
        }

        // add ship to ships array:
        ships.push(newShip);
    }

    function receiveAttack(x, y) {
        const attackedSquare = findSquare(x, y);

        // if square has already been attacked, simply return:
        if (hits.has(attackedSquare) || misses.has(attackedSquare)) return;

        // mark the square as having been attacked:
        attackedSquare.attacked = true;
        
        // if the attacked square has a ship, add a 'hit' to that ship:
        if (attackedSquare.ship) {
            attackedSquare.ship.hit();
            // then add the square to the 'hits' set:
            hits.add(attackedSquare);
            // check if the hits set has 17 hits (this means the player has lost):
            if (hits.size === 17) {
                allSunk = true;
                // then start end-of-game procedure...
            }
        } else {
            // otherwise add the square to the 'misses' set:
            misses.add(attackedSquare);
        }

    }

    return { 
        createShip, 
        hits, 
        misses, 
        allSunk,
        receiveAttack 
    }
}

export default Gameboard;