function estPremier(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function sommeNombresPremiers(a,b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

console.log(sommeNombresPremiers(3, 7));
// Expected output: 10
console.log(sommeNombresPremiers(9, 10));
// Expected output: false