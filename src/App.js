import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import BlogPosts from './components/BlogPosts/BlogPosts'
import ProjectList from './components/ProjectList/ProjectList'
import Project from './components/Project/Project'
import Blog from './components/Blog/Blog'
import 'normalize.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route path="/" exact component={Home} />  
        <Route path="/projects" exact component={ProjectList} />  
        <Route path="/projects/:id" exact component={Project} />  
        <Route path="/blog" exact component={BlogPosts} />  
        <Route path="/blog/:id" exact component={Blog} />  
      </BrowserRouter>
    </div>
  );
}

export default App;