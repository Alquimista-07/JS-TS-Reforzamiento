
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
