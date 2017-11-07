import React, {Component} from 'react';
import axios from 'axios';

import './navBar.css';

export default class NavBar extends Component{
  constructor(props){
    super(props);
  }

  render(){

    axios.get("/api/test").then(response => console.log(response))

    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">CFB Sports</a>
          </div>
        </div>
      </nav>
    )
  }
}
