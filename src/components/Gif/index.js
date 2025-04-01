import React from 'react'
import { Link } from 'wouter'
import './Gif.css'

export default function Gif({title,id,url}) {

    /* const prueba= async () =>{
        const response = await fetch('https://api.chucknorris.io/jokes/random/');
        const apiResponse = await response.json();
        console.log(apiResponse.value);       
       }
       prueba();
    */
    return(
        <div className='Gif'>
        <Link to={`/gif/${id}`} className='Gif-link'>
            <img src={url} alt={title} />
        </Link>
        </div>
    )
}