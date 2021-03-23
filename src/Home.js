
import React, { Component } from 'react';
 
import { 
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';
import Navbar from './Navbar';

// Home component

class Home extends Component {
    render(){
      return(
        <div>
          <h1>Welcome</h1>
          <h4>HOME</h4>
          
        </div>
      );
    }
}

  export default Home;