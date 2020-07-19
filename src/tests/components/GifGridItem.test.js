import React from 'react';
const { shallow } = require("enzyme");
const { GifGridItem } = require("../../components/GifGridItem");



describe('Prueba en GifGridItem', () => {
    
    const title = 'Titulo';
    const url = 'http://google'
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    });

    test('Debe tener el url y el alt de la imagen', () => {

        const img = wrapper.find('img');

/*      console.log(img.html())  <-- Para ver las propiedades de una etiqueta uso html (NO USAR)
        React reconoce src y alt como properties, .prop() devuelve un objeto con ellas
        console.log(img.prop().src) <-- otra forma --> console.log(img.prop('src') ) 
        
        console.log(img.prop('src'))    <---  MUESTRA UNA PROPIEDAD
        console.log(img.props('src'))   <---  MUESTRA TODAS LAS PROPIEDADES
*/
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    
    test('Debe contener animate__pulse', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');    // <-- muestra todas las clases del div
        console.log(className.includes('animate__pulse'))  // <-- incluye animate__pulse? true 

        expect(className.includes('animate__pulse')).toBe(true);
    })
    
    
    
})
