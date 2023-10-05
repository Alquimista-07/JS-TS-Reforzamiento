
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