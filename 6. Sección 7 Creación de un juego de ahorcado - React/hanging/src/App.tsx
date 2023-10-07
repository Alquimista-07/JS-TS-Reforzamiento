import { useState } from 'react';

// Importamos el arreglo de letras
import { letters } from './helpers/letters';

// Importación Componentes
import { HangImage } from './components/HangImage';

import "./App.css";

function App() {

  // Manejo de la palabra. Adicionalmente hacemos el manejo de la palabra y la palabra oculta a través
  // del hook con su correspondiente estado inicial con el fin de irlo actualizando y que dichos cambios
  // se vean reflejados en la interfaz cuando una letra es correcta o incorrecta.
  const [ word ] = useState( 'COMPUTADORA' );
  const [ hiddenWord ] = useState( '_ '.repeat( word.length ) );

  // NOTA: Para manejar los intentos e ir cambiandolos necesitamos manejar el estado en React.
  //       Y el estado no es más que como se encuentra el valor de alguna variable y con esa
  //       variable adicionalmente queremos mostrar algo en el html. Para manejar el estado en 
  //       React existe un hook o función especial llamada el useState.
  //       Esta tiene un arreglo en la cual el primero elemento es una variable que va a almacenar 
  //       el estado y un segundo elemento que es una función que va a permitir actualizar ese estado-
  //       Adicionalmente a el useStatela también le podemos indicar un valor inicial el cual se manda 
  //       como un argumento.
  const [ intento, setIntento ] = useState(0);

  const checkLetter = ( letter: string ) => {

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
