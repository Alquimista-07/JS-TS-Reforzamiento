
//--------------------------------------------------------------------------
//                                   OBJETOS LITERARLES
//--------------------------------------------------------------------------
// Un objeto literal no es más que una abstracción de algo que usualmente puede 
// existir en la vida real.
export let person = {
    name: 'Melissa',
    age: 30,
    isActive: true,
    hobbies: ['Soccer', 'Baseball'],
    // Creamos un método y los métodos son funciones que se encuentran dentro de un objeto. Por lo tanto
    // estos también pueden recibir argumentos
    toString() {
        // Cuando usamos el this, estamos diciendole que haga referencia a este objeto (person)
        // en lugar de hacer referencia con person.name, etc, ya que puede ser que el objeto 
        // tenga otro nombre y no queremos que el código sea tan vulnerable y estar cambiando
        // el código internamente cada vez que se haga un cambio.
        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log(objectString);
    }
}

console.log( person );

console.log( person.age );

console.log( person.name.toUpperCase() );
console.log( person.name.length );

person.toString();

console.log('--------------------------------------------------------------------------');

//--------------------------------------------------------------------------
//                     EJERCICIO PRÁCTICO OBJETOS LITERARLES
//--------------------------------------------------------------------------
let car = {
    doors: 5,
    model: 2022,
    brand: 'Mitsubishi',
    color: 'Negro',
    motor: 'Híbrido',
    gearbox: 'Manual'
}

let smartTv = {
    sizeInches: 108,
    screen: 'LCD',
    year: 2023,
    color: 'Negro',
    available: true,
    stock: 100,
    brand: 'Xiaomi'
}

let youtubeVideo = {
    lenght: 4650,
    author: 'Fernando Herrera',
    format: 'mp4',
    comments: ['Buen video', 'Me gusta'],
    likes: 465,
    dislikes: 20
}

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);

console.log('--------------------------------------------------------------------------');

//--------------------------------------------------------------------------
//                    ARREGLOS DE OBJETOS
//--------------------------------------------------------------------------
interface Person {
    name: string;
    age: number,
    isActive: boolean
}

let fernando: Person = {
    age: 36,
    isActive: true,
    name: 'Fernando'
};

let melissa: Person = {
    age: 30,
    name: 'Melissa',
    isActive: true
};

let andres: Person = {
    name: 'Andres',
    age: 42,
    isActive: false
};

let people: Person[] = [ fernando, melissa, andres ];

for (let i = 0; i < people.length; i++) {
    let person = people[i];
    console.log(person.name + ' ' + person.age);
}

console.log('--------------------------------------------------------------------------');

//--------------------------------------------------------------------------
//               CLASES (Programación Orientada a Objetos - POO)
//--------------------------------------------------------------------------
// NOTA: La programación orientada a objetos es la programación en la cual nosotros
//       estamos tratando de trabajar basado en clases y nuestras clases son abstraciones
//       de "objetos que existen en la vida real"

// Al igual que los objetos, pueden ser representaciones abstractas de cosas.
// Y una analogía sería que una clase es como un molde para hacer galletas el cual
// obviamente sirve para eso y con el cual pod3emos crear no solo una sino muchas.
class Car {

    // Propieades o atributos de la clase
    brand: string;
    doors: number;
    fullTank: number;
    isRunning: boolean;
    type: string;
    createdAt: number;
    
    // El consturctor no es más que una función pero como está dentro de una clase o dentro de un objeto se conoce es como 
    // un método. Este constructor es lo que se va a ejecutar primero cuando creamos una instancia de la case y lo podemos
    // usar para inicializar lo que queramos.
    constructor( brand: string, type: string ) {
        this.brand = brand;
        this.doors = 0;
        this.fullTank = 0;
        this.isRunning = false;
        this.type = type;
        this.createdAt = 453456454;
    }

    //------------------------------------------
    // Métodos de una clase
    //------------------------------------------
    // Los métodos son funciones relacionadas a la clase. Y cualquier variable que sea una instacia de la clase, tendrá esas funciones.
    turnOn() {

        if( this.isRunning ) {
            console.log('El carro ya estaba encendido... Se daño el motor');
            return;
        }

        if( this.fullTank <= 0 ){
            console.log('El carro no tiene gasolina');
            return;
        }
        
        this.isRunning = true;
        console.log('El carro esta encendido');

    }

    // ---------------------------------------
    //    TAREA: Método para llenar el tanque
    // ---------------------------------------
    fillTank( gas: number ){

        if( gas <= 0 ){
            console.log('El gas debe ser positivo');
            return;
        }

        let fullTankNew = this.fullTank + gas;

        if( fullTankNew >= 100  ) {
           fullTankNew = 100;
        }
        
        this.fullTank = fullTankNew;

    }

}

// Creamos una nueva instancia de la clase por consecuencia estamos definiendo todas las propiedades
// y métodos de la clase instantaneamente y esto es una diferencia con las interfaces ya que no podemos
// las interfaces no sirven para crear nuevas instancias sino que la interface sirve para definir como
// va a lucir un objeto

let myMazda = new Car( 'Mazda', 'Sedan' );

console.log(myMazda);

console.log('--------------------------------------------------------------------------');

console.log(myMazda.brand);

console.log('--------------------------------------------------------------------------');

myMazda.turnOn();
myMazda.turnOn();
console.log(myMazda);
console.log('--------------------------------------------------------------------------');

myMazda.fillTank(50);
myMazda.turnOn();

console.log('--------------------------------------------------------------------------');
