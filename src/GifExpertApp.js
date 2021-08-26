import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ()=>{
    //const categorias = ['One punch', 'Dragon Ball','Star war' ]
    const [categorias, setCategorias] = useState(['One punch' ]);

    /*const handleAdd = () => {
        setCategorias( [...categorias,'twd'] )//modifico su estado inicial  con... llamos LOS valores del array que tiene, mas el nuevo elemento TWD 
        //setCategorias( cats => [ ...cats,'TWD'])//otra forma de hacerlo       
    }*/


    return (
        <>
            <h2>Gift Expert</h2>
            <AddCategory setCategory={ setCategorias } />
            {/* <button onClick={ handleAdd }>hola</button> */}
            <ol>
                {
                    categorias.map( category =>(
                        <GifGrid 
                        category={ category }
                        key={ category }
                        />
                        // return <li key={category}>{category} </li>
                    ))
                }
            </ol>
        </>
    )
}