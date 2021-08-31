import { GifGridItem } from "../../components/GifGridItem";
import { shallow } from 'enzyme';
import React from 'react';


describe('Pruebas en <GifGridItem />',()=>{
    const title = 'titulo';
    const  url = 'https://localhost/algo.jpg';
    const id = 1;
    const wrapper = shallow( <GifGridItem title={ title } url={ url } id={id}/> );


    test('Debe mostrar el componente correctamente',()=>{
        // expect( wrapper ).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el title',()=>{
        const p = wrapper.find('h2');
        expect( p.text().trim() ).toBe( title );
    });

    test('debe de tener la imagen igual al url y alt de los props',()=>{
        const img = wrapper.find('img');
        console.log(img.prop('src'));
        expect( img.prop('src') ).toBe(url);

    });
});

/*
1. Enzyme
2. Enzyme to Json
3. debe de mostrar el componente correctamente 
    *shallow
    *wrapper
    *wrapper .toMarchSanapshot();

*/