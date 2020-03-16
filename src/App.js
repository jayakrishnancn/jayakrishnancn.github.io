import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import UnderConstruction from './components/ErrorPages/UnderConstruction'
import 'normalize.css';
import './App.css'
import './util.css'
import './topography.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route component={UnderConstruction} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;