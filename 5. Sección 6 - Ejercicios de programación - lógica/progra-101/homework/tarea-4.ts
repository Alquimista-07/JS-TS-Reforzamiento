
export let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

let aux = -9999999; 
let mayor = 0;

for (let i = 0; i < numbers.length; i++) {

    if(numbers[i] > aux){
        aux = numbers[i];
    } else {
        mayor = aux;;
    }

}

console.log('El número mayor es: ', mayor);
