import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'

import {Link, Route } from 'wouter'

export default function App() {

  return (
    <div className="App">
     <header className='App-header'>
        <h1>App de Gifs</h1>
     </header>

      <section className="App-content gif-grid">
      <img className='gif-icon' src='https://cdn-icons-png.flaticon.com/128/337/337936.png'></img>

        <h1>Los Gifs de Fran</h1>
        <Link to='/gif/star-wars'>Gifs de Star Wars</Link>
        <Link to='/gif/marc-marquez'>Gifs de Marc Marquez</Link>
        <Link to='/gif/dogs'>Gifs de Perros</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
      <footer className='App-footer'>
        <p>© 2025 Fran</p>
      </footer>
    </div>
  );
}