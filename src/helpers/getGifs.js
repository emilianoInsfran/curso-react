

export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=oyVU57SQsDZhUJQXdg6gKVbSsAX7FWwa`;//encodeURI remplaza los espacios y tamaño de la letra apra que lo envie correctamente
    const resp = await fetch( url );
    const {data} = await resp.json();//utilizo la desestruturación para que me muestre solo el array conla info poniendole {} a data

    const gifs = data.map( img => {
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url

        }
    })

    console.log(gifs);

    return gifs;
}