// NOTA: Es una convención en React que el nombre de los componentes
//       inicien capitalizados. 

// Importamos las imágenes para usarlas
import image0 from '../assets/0.png';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/4.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';

// Creamos un arreglo para las imágenes el cual es un arreglo de strings
const images: string[] = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9
]

// Creamos una interface para definir como van a lucir los props
interface Props {
    imageNumber: number;
}

// NOTA: Un componente no es más que una simple función de JavaScript 
//       y la exportamos para usarla fuera.
// NOTA: Recibimos el prop que viene del componente padre App.tsx y lo desestructuramos para simplificar el código y no usar la notación de
//       punto para hacer referencia a la proiedad imageNumber
export function HangImage( { imageNumber }: Props ) {

    // Hacemos una validación para evitar errores cuando se intenta más de lo permitido
    // y ya con esto aseguramos que el componente siempre muestre una imágen.
    if( imageNumber >= 9 ){
        imageNumber = 9;
    }

  // Regresamos un nuevo elemento html conocido como un JSX Element
  return (
    <img 
        src={ images[ imageNumber ] } 
        alt="Hang Image"
        style={{ width: 250 }}
    />
  );
}
