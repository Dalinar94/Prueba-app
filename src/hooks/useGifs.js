import {useContext, useState, useEffect } from'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs({keyword}={keyword: null}) {
    const [loading, setLoading] = useState(false)
    //const [gifs, setGifs] = useState([])
    const{gifs, setGifs} = useContext(GifsContext)
  
    //efecto que se ejecuta cada vez que se renderiza el objeto SearchResults
    useEffect(function () {
      setLoading(true)
      //Recuperamos la palabra clave guardada en el local storage
      const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
      
      getGifs({ keyword:keywordToUse })
        .then(gifs => {
          setGifs(gifs)
          setLoading(false)
          //Guardamos la palabra clave en el local storage para utilizarla en la próxima carga
          localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword,setGifs])
    return {loading, gifs}
}
