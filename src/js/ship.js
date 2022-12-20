const Ship = (length) => {

    let hits = 0;
    let sunk = false;

    function hit() {
        if (hits === length) {
            return;
        }
        hits++;
        if (hits === length) {
            sunk = true;
        }
    }

    return { hit, sunk }

};

export default Ship;