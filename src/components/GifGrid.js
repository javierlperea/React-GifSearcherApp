
import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);  // <-- data:images cambia el nombre a images


/*     //Creo un nuevo estado useState que inicializa con un array vacio
    const [images, setImages] = useState([])

    //Creo hook USEEFFECT que va a controlar no renderizar nuevamente las imagenes para evitar un bucle infinito
    // Llama a la funcion y mediante un segundo argumento (array de dependencia) evita el bucle infinito
    useEffect( () => {
        getGifs(category)
            .then( setImages )
    }, [category])   // <-- Array de dependecia []
 */
    
    return (
        <>
            <h3> {category} </h3>
            {loading && <p className="animate__flash">Loading...</p> } {/* SI ESTA CARGANDO MUESTRA LOADING SINO NO MUESTRA NADA */}
            <div className="card-grid">
                {   //al array vacio le coloco un id y un title
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            //utilizxo el operador spread para mandar cada una de las propiedades de la imagen como una propiedad independiente
                            {...img} 
                            
                        />
                    ))
                }
                
            </div>
        </>
    )
}
