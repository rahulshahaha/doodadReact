import React from 'react';
import "../css/Nav.css"
import {NavLink} from 'react-router-dom'
// import Link from 'react-router-dom'


class Nav extends React.Component {



render(){
    return (
      <div className="Nav">
        <ul>
          <li><NavLink className="navLogoLink" to="/"><img alt="logo" href="/" className="navLogo" src="https://firebasestorage.googleapis.com/v0/b/doodad-capital.appspot.com/o/Images%2FstraightLogo.png?alt=media&token=3320a0eb-b351-427c-972a-89eabf75a59d"></img></NavLink></li>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/articles">Articles</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
