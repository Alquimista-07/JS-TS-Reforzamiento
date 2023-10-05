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
 