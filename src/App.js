import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';


import Navbar from './components/Navbar/index';
import Contact from './components/Contact/index';
import Index from './components/Index/index';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Index} />
          <Route path="/contact" component={Contact} />  
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
