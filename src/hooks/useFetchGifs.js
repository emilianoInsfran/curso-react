//custom hook (los hooks son funciones) se le pone use adelante del nombre, es un estandar nombrarlo así
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category)=> {
    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{
        getGifs(category)
            .then(img =>{

                setTimeout(() => {
                    setState({//se dispara y renderiza la DOM con la nueva info 
                        data:img,
                        loading:false
                    })
                }, 3000);

        })
    },[category]);

    return state;//retorna {data:[], loading:true};
}