//--------------------------------------------------------------------------
//                        FUNCIONES
//--------------------------------------------------------------------------
export function greet( name: string = 'Mundo!!!' ) {

    console.log('Hola ' + name);

}

let firstName = 'Fernando';

greet( firstName );

console.log('--------------------------------------------------------------------');

//--------------------------------------------------------------------------
//                        EJEMPLO DE FUNCIÓN
//--------------------------------------------------------------------------
function addTwoNumbers( num1: number, num2: number ): number {
    return num1 + num2;
}

 let total: number = addTwoNumbers( 10, 20 );

 console.log('Total: ' + total);

 console.log('--------------------------------------------------------------------');
 //--------------------------------------------------------------------------
//              IMPORTACIÓN - EXPORTACION FUNCIONES (Concepto Módulos)
//---------------------------------------------------------------------------

 import { addTwoNumbers2, substractTowNumbers, timesTwoNumbers, divideTwoNumbers2 } from './helpers/math-helpers';

let numb1: number = 10;
let numb2: number = 20;

 let total1: number = addTwoNumbers2(numb1, numb2);
 let total2: number = substractTowNumbers(numb1, numb2);
 let total3: number = timesTwoNumbers(numb1, numb2);
 let total4: number = divideTwoNumbers2(numb1, numb2);

 console.log( 'Add: ' + total1 );
 console.log( 'Substract: ' + total2 );
 console.log( 'Multipy: ' + total3 );
 console.log( 'Divide: ' + total4 );

 console.log('--------------------------------------------------------------------');

//--------------------------------------------------------------------------
//                        TAREA: TABLA DE MULTIPLICAR
//--------------------------------------------------------------------------
import { printMultiplicationTable } from './helpers/print-multiplication-table';

printMultiplicationTable(10);
printMultiplicationTable(10, 20);

console.log('--------------------------------------------------------------------');

//--------------------------------------------------------------------------
//                                   ARREGLOS
//--------------------------------------------------------------------------
 let people: string[] = ['Fernando', 'Melissa', 'Eduardo'];
 let flowers: string[] = ['Rosa', 'Girasol', 'Pensamiento', 'Lirio',  'Crisantemo'];

for( let flor of flowers ){
    console.log(flor);
}

console.log('--------------------------------------------------------------------');

flowers.forEach(flor => {
    console.log(flor);
});

console.log('--------------------------------------------------------------------');


 for(let i = 0; i < flowers.length; i++){
    console.log(flowers[i]);
 }

 console.log('--------------------------------------------------------------------');
