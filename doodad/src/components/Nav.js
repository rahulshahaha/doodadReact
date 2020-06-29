import React from 'react';
import "../css/Nav.css"
import {NavLink} from 'react-router-dom'
// import Link from 'react-router-dom'


class Nav extends React.Component {



render(){
    return (
      <div className="Nav">
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/articles">Articles</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
