function tri(tableau, order) {
    if (order === "asc") {
        return tableau.sort((a, b) => a - b);
    } else if (order === "desc") {
        return tableau.sort((a, b) => b - a);
    }
}

console.log(tri([4, 3, 2, 1], "asc"));
// Expected output: [1, 2, 3, 4]
console.log(tri([4, 3, 2, 1], "desc"));
// Expected output: [4, 3, 2, 1]