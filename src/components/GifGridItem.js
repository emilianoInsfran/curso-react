import React from 'react';

export const GifGridItem = ( {id,title,url} ) => {
    console.log(id,title,url)
    // //como class es una palabra reservada de js le pusieron className
    return (
        <div className="card">
            <img src={url} title={title}/>
            <h2>{title}</h2>
        </div>
    )
} 