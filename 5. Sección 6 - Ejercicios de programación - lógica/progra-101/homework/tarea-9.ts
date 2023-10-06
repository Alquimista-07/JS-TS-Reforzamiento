
export function heroesThatStartsWith(hero: string[], letter: string) {
    
    let newHeros: string[] = [];
    letter = letter.toLocaleUpperCase();

    for (let i = 0; i < hero.length; i++) {
        if( hero[i].startsWith(letter) ){
            let nameHero:string = hero[i].toString();
            newHeros.push(nameHero);
        }
    }

    return newHeros;

}


let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
console.log( herosWithLetterS ); // She Hulk, Spiderman