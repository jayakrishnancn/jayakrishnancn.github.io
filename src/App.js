import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import 'normalize.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route path="/" exact component={Home} />  
        <Route path="/projects" exact component={Home} />  
        <Route path="/projects/:id" exact component={Home} />  
        <Route path="/blog" exact component={Home} />  
        <Route path="/blog/:id" exact component={Home} />  
      </BrowserRouter>
    </div>
  );
}

export default App;
