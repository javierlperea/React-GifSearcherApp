import React, { useState } from 'react';
import PropTypes from 'prop-types'

/* ESTE COMPONENTE ME PERMITE ESCRIBIR LA INFORMACION 
Estoy recibiendo setCategories (es una funcion) como parametro y lo utilizo en handleSubmit por eso desestructuro los argumentos del componente  
*/

const AddCategory = ( {setCategories} ) => {

    // Utilizo un hooker
    const [inputValue, setInputValue] = useState('');

    // Permite escribir en el input
    const handleInputChange = (e) => {
        // Accede al texto del input y modifica el value de un input gracias al set del HOOK
        setInputValue( e.target.value )
    }
    // Se ejecuta al presionar la tecla ENTER (necesito crear un form que contenga al input)
    const handleSubmit = (e) => {
        // No permite el refresh automatico
        e.preventDefault();

        //Revisa que se hayan escrito al menos 2 letras para hacer el submit
        if(inputValue.trim().length > 2) {
            //setCategories toma el array anterior y le agrega lo que se escribio en el input
            setCategories( cats => [inputValue, ...cats] );
            //limpia el texto del input
            setInputValue('');
        } else {

        }
    }

    // Cuando agrego el <form> ya no necesito el fragment (<> </>)
    return (
        <form onSubmit={ handleSubmit }>    {/* <-- Produce el evento submit con ENTER */} 
                <input 
                    type="text" 
                    placeholder="Buscar"
                    value={ inputValue }
                    onChange={ handleInputChange }  // <-- Sin esto no puedo escribir en el input
                />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;