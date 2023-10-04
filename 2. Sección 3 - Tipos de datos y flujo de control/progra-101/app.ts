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
export let gasTank = 50;

while( gasTank > 0) {
    console.log('Gasolina restante: ', gasTank);
    gasTank--;
}

console.log('Ya no hay gasolina');

console.log('----------------------------------------------------------------------');

//--------------------------------------------------------------------------
//                        CICLOS - DO WHILE
//--------------------------------------------------------------------------
export let gasTank2 = 0;

do {

    console.log('Gasolina restante: ', gasTank2);
    gasTank2--;

} while( gasTank2 > 0);

console.log('Ya no hay gasolina');

console.log('----------------------------------------------------------------------');

//--------------------------------------------------------------------------
//                        CICLOS - FOR
//--------------------------------------------------------------------------

export let limite = 50;

// Nota: El tercer argumento del for es opcional y por lo tanto lo podríamos manejar dentro del cuerpo del ciclo,
//       pero generalmente se usa como el tercer argumento para incrementar la variable de control
for( let i = 0; i <= limite; i++ ){
    
    if(i === 5){
        continue;
    }
    
    console.log('Valor de i: ', i);
    
    if(i === 5){
        break;
    }

}

console.log('Fin de programa');

console.log('----------------------------------------------------------------------');

//--------------------------------------------------------------------------
//                        TAREA CICLOS
//--------------------------------------------------------------------------

// Primera forma
export let base1 = 10;
let limit1 = 50;
let aux = 0;

console.log('Inicio Programa - While');
while ( aux <= limit1 ) {
    let resultado = base1 * aux;
    console.log(base1 + ' X ' + aux  + ' = ', resultado );
    aux++;
}
console.log('Fin Programa - While');

console.log('----------------------------------------------------------------------');
// Segunda forma
export let base2 = 10;
let limit2 = 50;

console.log('Inicio Programa - For');
for (let i = 0; i <= limit2; i++) {
    console.log(base2 + ' X ' + i  + ' = ', base2 * i);
}
console.log('Fin Programa - For');

console.log('----------------------------------------------------------------------');

// Tercera forma
export let aux2 = 0;
let base3 = 10;
let limit3 = 50;

console.log('Inicio Programa - do while');
do{

    let res = base3 * aux2;
    console.log(base3 + ' X ' + aux2  + ' = ', res );
    aux2++;

} while( aux2 <= limit3 )
console.log('Fin Programa - do while');

console.log('----------------------------------------------------------------------');
