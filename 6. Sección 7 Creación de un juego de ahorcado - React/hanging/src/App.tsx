// Importamos el arreglo de letras
import { letters } from './helpers/letters';

// Importación Componentes
import { HangImage } from './components/HangImage';

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Imágenes */}
      {/* Para el manejor de las imágenes lo separamos en un componente al cual le enviamos un parámetro (imageNumber) también conocido como prop o property */}
      <HangImage imageNumber={ 9 } />

      {/* Palabra oculta */}
      <h3>_ _ _ _ _ _ _ _ _ _</h3>

      {/* Contador de intentos */}
      <h3>Intentos: 0</h3>
      
      {/* Botones de letras */}
      {
        letters.map( (letter) => (
          <button 
            key={ letter }>
              { letter }
          </button>
        ))
      }
    </div>
  );
}

export default App;
