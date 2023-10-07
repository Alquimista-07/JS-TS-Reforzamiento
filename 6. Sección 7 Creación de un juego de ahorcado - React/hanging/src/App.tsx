import { useEffect, useState } from 'react';

// Importamos el arreglo de letras
import { letters } from './helpers/letters';

// Importación Componentes
import { HangImage } from './components/HangImage';

// Importación de la función que genera las palabra aleatoriamente
import { getRandomWord } from './helpers/getRandomWord';

import "./App.css";

function App() {

  // Manejo de la palabra. Adicionalmente hacemos el manejo de la palabra y la palabra oculta a través
  // del hook con su correspondiente estado inicial con el fin de irlo actualizando y que dichos cambios
  // se vean reflejados en la interfaz cuando una letra es correcta o incorrecta.
  const [ word ] = useState( getRandomWord() );
  const [ hiddenWord, setHiddenWord ] = useState( '_ '.repeat( word.length ) );

  // NOTA: Para manejar los intentos e ir cambiandolos necesitamos manejar el estado en React.
  //       Y el estado no es más que como se encuentra el valor de alguna variable y con esa
  //       variable adicionalmente queremos mostrar algo en el html. Para manejar el estado en 
  //       React existe un hook o función especial llamada el useState.
  //       Esta tiene un arreglo en la cual el primero elemento es una variable que va a almacenar 
  //       el estado y un segundo elemento que es una función que va a permitir actualizar ese estado-
  //       Adicionalmente a el useStatela también le podemos indicar un valor inicial el cual se manda 
  //       como un argumento.
  const [ intento, setIntento ] = useState(0);

  // Manejamos un nuevo estado para saber si perdió
  const [ lose, setLose ] = useState( false ); // Se iniciliza en false ya que cuando inicia el juego aún no ha perdido
  
  // Manejamos un nuevo estado para saber si ganó
  const [ won, setWon ] = useState( false ); // Se iniciliza en false ya que cuando inicia el juego aún no ha ganado
  

  // Determinar si la persona perdió
  // React tiene algo genial que se le conoce como un efecto y que se maneja a través de un hook propio de React. Y un efecto
  // nos permite disparar acciones cuando algo sucede, o estar pendientes de algo y cuando ese algo se cumpla o cuando ese algo
  // cambie, reaccionar con ello.

  // NOTA: En React se recomienda que se tengan efectos (useEffect) con tareas específicas

  // EL useEffect tiene internamente una función que vamos a ejecutar cada vez que algo suceda, y para ello estamos pendiente de 
  // la variable de los intentos la cual la indicamos entre []
 useEffect( () => {

  if( intento >= 9 ){
    // Perdió
    setLose( true );
  }

 }, [ intento ]);

 // Determinar si la persiona ganó
 useEffect(() => {

  // console.log(hiddenWord); //_ _ _ _ _ _ _ _ _
  const currentHiddenWord = hiddenWord.split(' ').join(''); // Manejo para quitar los espacios
  //console.log(currentHiddenWord);

  if( currentHiddenWord === word ) {
    setWon( true );
  }


 }, [ hiddenWord ]);


  const checkLetter = ( letter: string ) => {

    // Preguntamos si el lose esta en true para hacer un retorno y evitar que continue 
    // ejecutando el demás código ya que al estar en true indica que perdió y el juego
    // terminó. Adicionalmente hacemos lo mismo si gano.
    if( lose ) return;
    if( won ) return;

    // Validamos si la letra que se esta enviando no existe en la palabra para llamar la actualización
    // del estado de los intentos.
   if(  !word.includes(letter) ) {
    
      // Manejamos la letra es errada y correcta usando la función del useState para actualizar el estado
      // y poder ir actualiznado los intentos.
      // Adicionalmente con la ayuda de la función min mantenemos el valor mínimo para que cuando los
      // intentos supere el valor mínimo establecido que es 9 lo siga manteniendo y el contador de
      // intentos no suba de 9
      setIntento( Math.min( intento + 1, 9 ) );

      return;

    }

    // Si no hace el return yo se que existe la letra ya que no entro al if, por lo tanto recorremos
    // el arreglo para ir asignando la letra correcta en su posición correspondiente
    const hiddenWordArray = hiddenWord.split(' '); // Dividimos el arreglo por los espacios para obtener un arreglo de guiones bajos
    //console.log(hiddenWordArray);

    for (let i = 0; i < word.length; i++) {
      if( word[i] === letter ) {
        hiddenWordArray[i] = letter;
      }      
    }

    // Establecemos el nuevo estado del hiddenWord.
    // Y hacemos el opuesto al split (join)
    setHiddenWord( hiddenWordArray.join(' ') );

  }

  return (
    <div className="App">
      {/* Imágenes */}
      {/* Para el manejor de las imágenes lo separamos en un componente al cual le enviamos un parámetro (imageNumber) también conocido como prop o property */}
      <HangImage imageNumber={ intento } />

      {/* Palabra oculta */}
      <h3>{ hiddenWord }</h3>

      {/* Contador de intentos */}
      <h3>Intentos: { intento }</h3>

      {/* Mensaje si perdió */}
      {
        ( lose ) 
        ? <h2>Perdió. { word }</h2> 
        : ''
      }
      {/* Mensaje si ganoó */}
      {
        ( won ) 
        ? <h2>Felicidades. Ha gando el juego!</h2> 
        : ''
      }
      
      {/* Botones de letras */}
      {
        letters.map( (letter) => (
          <button 
            onClick={ () => checkLetter( letter ) }
            key={ letter }>
              { letter }
          </button>
        ))
      }
    </div>
  );
}

export default App;
