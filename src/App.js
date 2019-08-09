import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomeComponent from './HomeComponent';
import AboutComponent from './AboutUsComponent';
import JavaComponent from './JavaComponent';
import AboutUsComponent from './AboutUsComponent';

class App extends Component {
  render(){
    return(
      <div>
        <h1>Welcome to QA.</h1>
        <Router>
          <Route path="/home" component={HomeComponent} />
          <Route path="/aboutus" component={AboutUsComponent} />
          <Route path="/java" component={JavaComponent} />
        </Router>
      </div>
    )
  }
}

export default App;
