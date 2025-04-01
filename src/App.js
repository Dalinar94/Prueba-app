import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearhResults from './pages/SearchResults';
import Detail from './pages/Detail';
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';
import {Link, Route } from 'wouter'

export default function App() {
  return (
    <StaticContext.Provider value={
      {
        name:'Francisco',
        haciendoPracticas: true
      }
    }>
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="App-logo" alt="Giffy logo" src="https://cdn-icons-png.flaticon.com/128/337/337936.png" />
        </Link>
        <GifsContextProvider>
        <Route 
          component= {Home}
          path="/" 
        />
        <Route 
          component={SearhResults}
          path="/search/:keyword" 
        />
        <Route
          component={Detail}
          path="/gif/:id"
        />
        </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  )
}