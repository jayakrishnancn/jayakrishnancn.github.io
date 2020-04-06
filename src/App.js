import React, { Component } from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Home from './components/Home/Home'
// import BlogPosts from './components/BlogPosts/BlogPosts'
// import Article from './components/Article/Article'
// import Projects from './components/Projects/Projects'
import UnderConstruction from './components/ErrorPages/UnderConstruction' 
import ThemeChooser from './components/sub_components/ThemeChooser/ThemeChooser' 
import 'normalize.css'
import './index.css'
import './App.css'
import './util.css'
import './topography.css'
import './buttons.css' 
import './components/Home/Home.css'
import './components/Navbar/Navbar.css' 
import './components/sub_components/LoadingPage/LoadingPage.css' 
import './components/sub_components/ErrorPage/ErrorPage.css' 
import './components/MiniPost/MiniPost.css' 

class App extends Component {
  
  constructor(props){
    super(props);
    const hours = new Date().getHours()
    let isNight = hours < 9 || hours > 17  
    this.state = {
      isNight
    }
  }

  themeChangeHandler = () => {
    let { isNight } = {...this.state};
    this.setState({isNight:!isNight})
  }
  render(){
    let { isNight } = this.state;

    return (
      <div className={ isNight ? "App dark" : "App" }>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact component={Home}/>
            {/*
							<Route path="/projects" exact component={Projects}/>
							<Route path="/projects/:id" exact render={props => <Article {...props} type="PROJECT"/>}/>
           		<Route path="/blog" exact component={BlogPosts}/>
              <Route path="/blog/:id" exact render={props => <Article {...props} type="BLOG"/>}/>
            */}
            <Route component={UnderConstruction} />
          </Switch>
        </BrowserRouter>
        <ThemeChooser night={isNight} onClick={this.themeChangeHandler} />
      </div>
    );
  }
}

export default App;