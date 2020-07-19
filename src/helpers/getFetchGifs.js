

export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=yiURy2uxbDnHpislXC6lW0kKUYJx7NTU`;    // encodeURI() elimina los posibles espacios
    const resp = await fetch(url);
    const {data} = await resp.json();

    // Recorro cada una de las imagenes y retorno un objeto con los datos que quiero utilizar
    const gifs = data.map( img => {
        return {    // <-- retorno un objeto
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url    // <-- ? pregunta si vienen las imagenes y recien las usa
        }
    })

    return gifs;
}
