const Ship = (length) => {

    let hits = 0;
    let startingSquare = null;
    let orientation = null;

    function hit() {
        if (hits === length) {
            return;
        }
        hits++;
    }

    function isSunk() {
        if (hits === length) return true;
        return false;
    }

    return { 
        hit, 
        isSunk,
        startingSquare,
        orientation,
        length
    }

};

export default Ship;