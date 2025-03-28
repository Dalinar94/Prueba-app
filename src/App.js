import React from 'react';
import './App.css';
import Home from './pages/Home'
import SearhResults from './pages/SearchResults'
import Detail from './Detail'

import {Link, Route } from 'wouter'

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="App-logo" alt="Giffy logo" src="https://cdn-icons-png.flaticon.com/128/337/337936.png" />
        </Link>
        <Route 
          component={Home}
          path="/" 
        />
        <Route 
          component={SearhResults}
          path="/search/:keyword" 
        />
        <Route
          component={Detail}
          path="gif/:id"
        />
      </section>

    </div>
  );
}