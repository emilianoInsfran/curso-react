import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';


describe('Pruebas con getGif Fetch',()=>{
    const setCategory = jest.fn();
    let wrapper = shallow( <AddCategory setCategory= { setCategory } /> );

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategory= { setCategory } /> );
    });


    test('debe de mostrarse correctamente ', ()=>{
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe cambiar la caja de texto ', ()=>{
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change',{
            target: {
                value:value
            }
        });
    });

    test('No deve mostrar la información si se hizo submit',()=>{
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategory).toHaveBeenCalled();
    })


});