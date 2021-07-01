import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CreateIcon from '@material-ui/icons/Create';

function Header(){
    return <header>
    <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <p class="navbar-brand">DAILY JOURNAL</p>
      </div>
        <ul class="nav navbar-nav navbar-right">
            
          <li><Link to="/compose">COMPOSE</Link></li>
          <li ><Link to="/">HOME</Link></li>
          <li ><Link to="/about">ABOUT</Link></li>
          <li ><Link to="/contact">CONTACT US</Link></li>
        </ul>
    </div>
  </nav></header>
}

export default Header