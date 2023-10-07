// La extensión la dejamos como .ts ya que este archivo va a contener solo código
// JavaScript y no es un componente de React.

let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'LIMON',
    'CELULAR',
    'MESA',
    'SILLA',
    'MOUSE',
    'TECLADO',
    'TELEVISOR',
    'VEHICULO',
    'ZANAHORIA',
    'PUEBLO',
    'CIUDAD',
    'ANIMAL',
    'VETERINARIO',
    'TELEFONO'
];

// Tomamnos aleatoriamente una palabra para retornarla
export function getRandomWord() {

    // Como necesito que sea entre 0 y el número de palabras que se tienen en el arrelo lo multiplicamos
    // Adicionalmente lo redondeamos usando el método floor para obtener la parte entera.
    const randomIndex = Math.floor( Math.random() * words.length );
    
    return words[ randomIndex ];
}