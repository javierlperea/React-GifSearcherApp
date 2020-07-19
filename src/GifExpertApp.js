import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

/* ESTE COMPONENTE PERMITE RENDERIZAR LA INFORMACION
Para poder mostrar un array como contenido HTML necesito recorrerlo, no puedo usar for, SE USA EL METODO map() que necesita un callback y tiene como argumento category, para que no de un error es importante usarlo con key (dentro del li de apertura) y luego usarlo en el cuerpo para que muestre los elementos no lo puedo hacer con un simple Array para ello uso un HOOk 
2. Utilizo el setCategories para añadir renderizar informacion por eso, envio esta funcion al componente <AddCategory />
*/

const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball Z'] <--- no hacer asi
    // Para esto se usan los hooks!!
    const [categories, setCategories] = useState(['BMW']);

/*  Utilizo la copia del string para agregar elementos al final o al inicio(segun ubicacion), si no lo hago de esta forma voy a modificar el string previo que tenia
    const handleAdd = () => {
        //----Forma 1 copiando string y agregando nuevo elemento
        setCategories(['Ranma 1/2', ...categories]);
        //----Forma 2 utiliza un callback con el estado anterior (cats = categories)
        setCategories = (cats) => [...cats, 'HunterXHunter'];
    } */

    return (
        <>
            <h2>Gif Searcher App</h2>
            <AddCategory setCategories={setCategories} /> {/* Envio la referencia a setCategories*/}
            <hr />
            <ol> 
                {
                    categories.map( category => (
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;