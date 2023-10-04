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

console.log('----------------------------------------------------------------------');

// Boolean

let isActive: boolean = true;
let isRunning: boolean = false;
let hasKids: boolean = true;

console.log('isActive', isActive);
console.log('isRunning', isRunning);
console.log('hasKids', hasKids);

console.log('----------------------------------------------------------------------');

//--------------------------------------------------------------------------
//                        CONTROL STRUCTURES
//--------------------------------------------------------------------------
//IF
console.log('Inicio de programa');

export let isTired: boolean = !true;

if ( isTired ) {
    console.log('Tomar Café');
} else {
    console.log('Tomar Aguar');
}

console.log('Fin de programa');

console.log('----------------------------------------------------------------------');

console.log('Inicio de programa');
// IF - ELSE Anidados
export let grade: number = 90;

if( grade >= 60 ){
    console.log('El alumno aprueba la clase');
} else if( grade > 50 ){
    console.log('Por favor estudie más');
}else {
    console.log('El alumno NO aprueba la clase');
}
console.log('Fin de programa');

console.log('----------------------------------------------------------------------');

//--------------------------------------------------------------------------
//                        TAREA IF - ELSE
//--------------------------------------------------------------------------

console.log('Inicio de programa');

export let grade2: number = 80;
let gradeLetter: string;

if ( grade2 >= 90 ) {
    gradeLetter = 'A';
} else if( grade2 >= 80 ) {
    gradeLetter = 'B';
} else if( grade2 >= 70 ) {
    gradeLetter = 'C';
} else if( grade2 >= 60 ){
    gradeLetter = 'D';
} else {
    gradeLetter = 'F';
}

console.log('La nota del alumno es: ', gradeLetter);

console.log('Fin de programa');

console.log('----------------------------------------------------------------------');

//--------------------------------------------------------------------------
//                        SWITCH
//--------------------------------------------------------------------------

export let weekDay: number = 3; // 1 = Lunes, 2 = Martes, 3 = Miércoles, ...

if( weekDay <= 0 ){
    // Lanzamos una excepción para terminar la ejecución del programa
    throw new Error('Día de la semana no permitido');
}

switch ( weekDay ) {

    case 1:
        console.log('El día es: Lunes');
        break;
        
    case 2:
        console.log('El día es: Martes');
        break;
            
    case 3:
        console.log('El día es: Miércoles');
        break;
                
    case 4:
        console.log('El día es: Jueves');
        break;
        
    case 5:
        console.log('El día es: Viernes');
        break;

    case 6:
        console.log('El día es: Sábado');
        break;
                
    default:
        console.log('El día es: Domingo');
        break;
    
    }

console.log('----------------------------------------------------------------------');
//--------------------------------------------------------------------------
//                        CICLOS - WHILE
//--------------------------------------------------------------------------
let gasTank = 50;

while( gasTank > 0) {
    console.log('Gasolina restante: ', gasTank);
    gasTank--;
}

console.log('Ya no hay gasolina');

console.log('----------------------------------------------------------------------');