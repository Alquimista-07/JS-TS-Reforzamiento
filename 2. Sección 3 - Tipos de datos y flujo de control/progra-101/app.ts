//--------------------------------------------------------------------------
//                        BASIC TYPES
//--------------------------------------------------------------------------
// Strings
export let firstName: string = 'Fernando';
let lastName : string = 'Herrera';

// console.log( firstName, lastName );
let fullName: string = firstName + ' ' + lastName;

console.log(fullName);

// Number

let number1: number = 10;
let number2: number = 20;

console.log(number1 - number2);

let number3: number = 10.5;
let number4: number = 20.3;

console.log(number3 + number4);

// Boolean

let isActive: boolean = true;
let isRunning: boolean = false;
let hasKids: boolean = true;

console.log('isActive', isActive);
console.log('isRunning', isRunning);
console.log('hasKids', hasKids);

//--------------------------------------------------------------------------
//                        CONTROL STRUCTURES
//--------------------------------------------------------------------------
console.log('Inicio de programa');

let isTired: boolean = !true;

if ( isTired ) {
    console.log('Tomar Café');
} else {
    console.log('Tomar Aguar');
}




console.log('Fin de programa');