import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//useEffect: me parmite ejecutar sierto codigo de manera condicional

export const GifGrid = ({ category }) => {

    const  [count, setCount] = useState(0); 
    //const [ images, setImages] = useState([]); 

    // useEffect( () => {//quiero que se ejecute cuando el componente es renderizado por primera vez
    //     getGifs(category).then(setImages);
    // },[category])//el segundo argumento [] es una array de argumentos si quiero que se ejecute una vez lo dejo como un array vacio, pero si la categoria cambia se vuelve a ejecutar
//{loading && <p>Loading</p>} si es verdadero pone el loading, sino, no hace nada. otra forma de validación
//podemos renombrar data  poniendo dos puntos: data:images
    const {data:images,loading} = useFetchGifs(category);//custom hooks
    return (
        <>
        <div>
            <h3>{ category }</h3>
            <h3>{ loading? 'cargando...' : 'data cargada' }</h3>
            {loading && <p>Loading</p>}
            <button onClick={()=>setCount( count + 1 )}>+1</button>

            <ol>
                {
                    images.map( (img) =>(
                    // images.map( ({id,title}) =>(
                        <GifGridItem key={img.id} {...img}/>//estoy enviando cada propiedad como una independiente (es un ejemplo pero usas los props)
                        // <li key={id}>{ title }</li>
                    ))
                }
            </ol>
        </div>
        </>
    )
}