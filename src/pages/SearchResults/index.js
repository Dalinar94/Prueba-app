import React from 'react'
 import Spinner from '../../components/Spinner'
 import ListOfGifs from '../../components/ListOfGifs'
 import {useGifs} from '../../hooks/useGifs'
 //ESTA ES LA PAGINA UNA VEZ REALIZADA LA BUSQUEDA

// La keyword es la clave para buscar en GIPHY
 export default function SearchResults ({ params }) {
   const { keyword } = params
   //llama al hook useGifs para buscar los gifs
   const {loading, gifs} = useGifs({ keyword  }) 
   
   return <>
     {loading
       ? <Spinner />
       : <ListOfGifs gifs={gifs} />
     }
    
   </>
 }