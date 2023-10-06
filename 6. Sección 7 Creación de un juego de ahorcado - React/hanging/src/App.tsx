// Importamos el arreglo de letras
import { letters } from './helpers/letters';

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Imágenes */}
      <h3>Imágen del Juego</h3>

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
