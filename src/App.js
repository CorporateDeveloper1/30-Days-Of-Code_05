import React from 'react';
import './App.css';
import Header from './components/Header'
import Landing from './components/Landing'
import Reserve from './components/Reserve'
import Items from './components/Items'
import Menu from './components/Menu'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Reserve />
      <Items />
      <Menu />
      <Contact />
      
    </div>
  );
}

export default App;
