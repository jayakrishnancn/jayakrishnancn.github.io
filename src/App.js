import React,{Suspense} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import BlogPosts from './components/BlogPosts/BlogPosts'
import ProjectList from './components/ProjectList/ProjectList'
import Container from './components/Container/Container'
import 'normalize.css';
import './App.css'
import './util.css'
import './topography.css'

const Project = React.lazy( ()=>import('./components/Project/Project'))
const Blog = React.lazy( ()=>import('./components/Blog/Blog'))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home} />  
{/*        

      <Route path="/projects" exact component={ProjectList} />  
      <Route path="/blog" exact component={BlogPosts} />  
      <Suspense fallback={<Container>Loading</Container>}>
        <Route path="/blog/:id" exact component={Blog} />  
        <Route path="/projects/:id" exact component={Project} />  
      </Suspense>
*/}
      </BrowserRouter>
    </div>
  );
}

export default App;