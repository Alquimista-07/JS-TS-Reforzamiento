
export function largestNameOfArray(array: string[]) {

    let palabra = '';
    let aux = -999999;

    for (let i = 0; i < array.length; i++) {
       if( array[i].length > aux ){
            palabra = array[i];
            aux = array[i].length;
       }
    }

    return palabra;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let hero = largestNameOfArray(heroes);
console.log(hero); // Profesor Charles Xavier 