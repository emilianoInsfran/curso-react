import React, { useState } from 'react';
import PropTypes from 'prop-types';//validaciones

export const AddCategory = ( { setCategory } )=> {//utilice la desestructuración de objetos, no use los props (quedaria sino props.setCategory)

    const [inputValue, setInputValue] = useState('Hola mundo');

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(inputValue.trim().length > 2){//trim borra los espacio dentro de un string
            setCategory(cats => [ inputValue,...cats,])
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit= { handleSubmit }>
                <input
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                /> 
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired,//le digo que tieene que ser una funcion y que sea obligatorio (props) - 
}