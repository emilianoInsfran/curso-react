import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGif Fetch',()=>{
    test('deb de traer 10 elementos', async()=>{
        const gifs = await getGifs('one punch');
        expect(gifs.length).toBe( 10 );
    })
});