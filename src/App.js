import React, { Component } from 'react';

import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Private from './components/Private/Private';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Familypage from './components/Familypage/Familypage';
import CreateChore from './components/CreateChore/CreateChore';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet"/>
        <Navbar/>
          <HashRouter>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/home' component={Home}/>
            <Route path='/family' component={Familypage}/>
          </Switch>
          
        </HashRouter>
        {/* <CreateChore /> */}
        <Footer/>
        
      </div>
    );
  }
}

export default App;
