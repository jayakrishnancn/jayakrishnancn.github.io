import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import BlogPosts from './components/BlogPosts/BlogPosts'
import BlogArticle from './components/BlogArticle/BlogArticle'
import Projects from './components/Projects/Projects'
import UnderConstruction from './components/ErrorPages/UnderConstruction'
import 'normalize.css'
import './App.css'
import './util.css'
import './topography.css'
import './buttons.css'

function App () {
  return (
    <div className="App  no-select">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/blog" exact component={BlogPosts}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/blog/:id" exact component={BlogArticle}/>
        <Route component={UnderConstruction} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;