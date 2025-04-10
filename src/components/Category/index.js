import React from 'react'
import {Link} from 'wouter'
import './Category.css'
 export default function Category({name, options = []}){
     return <>
         <h3 className="App-title">{name}</h3>
         <ul>
             {options.map((singleOption) => (
                 <li key={singleOption}>
                     <Link to={`/search/${singleOption}`}>{singleOption}</Link>
                 </li>
             ))}
         </ul>
     </>
 }