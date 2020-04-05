import React, { Component } from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Home from './components/Home/Home'
// import BlogPosts from './components/BlogPosts/BlogPosts'
// import Article from './components/Article/Article'
// import Projects from './components/Projects/Projects'
import UnderConstruction from './components/ErrorPages/UnderConstruction' 
import ThemeChooser from './components/sub_components/ThemeChooser/ThemeChooser' 
import 'normalize.css'
import './App.css'
import './util.css'
import './topography.css'
import './buttons.css' 

class App extends Component {
  state = {
    darkTheme: null
  }

  themeChangeHandler = () => {
    let { darkTheme } = {...this.state};
    darkTheme = !darkTheme
    this.setState({darkTheme})
  }
  render(){
    let { darkTheme } = this.state;
    
    if(darkTheme === null){
      const hours = new Date().getHours()
      const isDayTime = hours > 9 && hours < 18
      darkTheme = isDayTime
    }

    return (
      <div className={darkTheme?"App":"App dark"}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact component={Home}/>
            {/*<Route path="/blog" exact component={BlogPosts}/>
              <Route path="/projects" exact component={Projects}/>
              <Route path="/projects/:id" exact render={props => <Article {...props} type="PROJECT"/>}/>
              <Route path="/blog/:id" exact render={props => <Article {...props} type="BLOG"/>}/>
            */}
            <Route component={UnderConstruction} />
          </Switch>
        </BrowserRouter>
        <ThemeChooser darkTheme={darkTheme} onClick={this.themeChangeHandler} />
      </div>
    );
  }
}

export default App;