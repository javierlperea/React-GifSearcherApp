/* ESTO ES UN HOOK PERSONALIZADO PARA MOSTRAR UN MENSAJE DE CARGANDO*/

import { useState, useEffect } from "react"
import {getGifs} from '../helpers/getFetchGifs'


export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });
    // El efecto solo se dispara cuando cambia la categoria
    useEffect( () => {

        getGifs(category)
            .then( imgs => {

            //console.log(imgs)
            setState ({     // <-- cambia la informacion
                data: imgs,
                loading: false
            })
})


                

    }, [category])  // Cuando cambia esto se dispara el useEffect

    return state; //{ data:[], loading: true }
} 