let numberOfLines = 1

// Ejercicio #1
console.log('Línea #', numberOfLines);

numberOfLines++;
console.log('Línea #', numberOfLines);

numberOfLines = numberOfLines + 1;
console.log('Línea #', numberOfLines);

numberOfLines += 1;
console.log('Línea #', numberOfLines);

console.log('----------------------------------------');

// Ejercicio #2
let numberOfLines2 = 1

function increaseLineNumber() {
    numberOfLines2+=3;
}

console.log('Línea #', numberOfLines2);

increaseLineNumber();
console.log('Línea #', numberOfLines2);

increaseLineNumber();
console.log('Línea #', numberOfLines2);

increaseLineNumber();
console.log('Línea #', numberOfLines2);