import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ( {id,title,url} ) => {
    // //como class es una palabra reservada de js le pusieron className
    return (
        <div className="card">
            <img src={url} title={title}/>
            <h2>{title}</h2>
        </div>
    )
} 


GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}