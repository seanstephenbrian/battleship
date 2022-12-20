const Ship = (length) => {

    let hits = 0;

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

    return { hit, isSunk }

};

export default Ship;