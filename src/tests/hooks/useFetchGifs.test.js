import {useFetchGifs} from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';//te ayuda a testear mejor los custom hooks
// https://react-hooks-testing-library.com/
describe('Pruebas en el hook useFetchGifs',()=>{


    test('debe retornar el estado inicial',async()=>{
        //const {data:images,loading} = useFetchGifs(category);//custom hooks
        const { result, waitForNextUpdate } = renderHook(()=> useFetchGifs('One Punch'));
        const {data,loading}=result.current;

        console.log(data, loading);
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    });

    test('DDebe de retornar un arregloo de imagenes y el loading en false', async()=>{
        const { result, waitForNextUpdate } = renderHook(()=> useFetchGifs('One Punch'));
        await waitForNextUpdate();
        const {data,loading}=result.current;

        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    });

});