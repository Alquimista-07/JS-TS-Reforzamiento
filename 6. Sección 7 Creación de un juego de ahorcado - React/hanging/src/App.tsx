import { useState } from 'react';

// Importamos el arreglo de letras
import { letters } from './helpers/letters';

// Importación Componentes
import { HangImage } from './components/HangImage';

import "./App.css";

function App() {

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
    // Suponiendo que la letra es errada y usamos la función del useState para actualizar el estado.
    // Adicionalmente con la ayuda de la función min mantenemos el valor mínimo para que cuando los
    // intentos supere el valor mínimo establecido que es 9 lo siga manteniendo y el contador de
    // intentos no suba de 9
    setIntento( Math.min( intento + 1, 9 ) );
  }

  return (
    <div className="App">
      {/* Imágenes */}
      {/* Para el manejor de las imágenes lo separamos en un componente al cual le enviamos un parámetro (imageNumber) también conocido como prop o property */}
      <HangImage imageNumber={ intento } />

      {/* Palabra oculta */}
      <h3>_ _ _ _ _ _ _ _ _ _</h3>

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
