
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

    // El nivel de acceso static. Los métodos y propiedades que tengan este static vana poder ser accedidas de forma global
    // Por lo tanto si usamos el nombre de la clase y le damos un punto vemos que podemos acceder a esta propiedad 
    // className y esto lo demostramos más abajo a través de un console.log(Car.className). OJO por lo tanto para accederlos
    // siempre tenemos que llamar la clase
    // Y esto nos puede servir por si acaso queremos establecer que el nombre de la clase para referencias o algún tipo de valor
    // que queramos que se mantenga a lo largo de toda la aplicación. Aunque estos son casos bien específicos en los cualse vamos 
    // a usar métodos y propiedades estáticas. OJO y recordemos
    static className = 'Car';

    // Propieades o atributos de la clase
    // El nivel de acceso readonly especifica que no se puede modificar una vez se crea por lo tanto si intentamos alterarla indicamdo por ejemplo
    // this.brand = 'Honda'; esto va a dar error ya que el readonly no lo permite, adicionalmente nos podemos dar cuenta que cuando esta asignación 
    // si la podemos hacer por constructor cuando creamos una nueva instancia, es decir, esta propiedad la vamos a poder modificar solo a través del
    // constructor pero no fuera de este sin importar sí nos encotremos dentro de la misma clase no la vamos a poder modificar.
    public readonly brand: string;
    public doors: number;
    public fullTank: number;
    public isRunning: boolean;
    public readonly type: string;

    private readonly createdAt: number;
    
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
// Vuando los atributos son publicos podemos acceder a ellos desde fuera de la clase incluso
// si son readnly pero como se mencionó antes solo podemos acceder a ellos más no modificarlos
// una vez se han establecido al instanciar la clase. Por lo tanto fuera del constructor no 
// vamos a poder modificarlo incluso si estamos dentro de la misma clase.
console.log( myMazda.type );

// Adicionalmete podemos hacer que los atributos de la case no sean visibles en el exterior
// y por consecuencia solo se pueden usar, llamar y modificar dentro de la misma clase en la 
// cual fueron definidos por ejemplo en el caso de createdAt que si intentamos imprimirla en
// un console.log nos va a dar error ya que no es accesible ya que es privada.

//console.log(myMazda.createdAt);

// Por lo tanto si queremos modificar en este caso el createdAt tendríamos que crear un método
// dentor de la clase que al llamarlo modifique el valor de createdAt

console.log(Car.className)

console.log('--------------------------------------------------------------------------');
