import React from 'react';
import "../css/Home.css"
import ArticleList from './ArticleList';
import Description from './Description'
import { NavLink } from 'react-router-dom';



class Home extends React.Component {



render(){
    return (
      <div className="Home">
        <Description></Description>
        <section className="coverPhoto">
        <div className="titleText">
          <h2>Hello, we are <span className="highlightText">Doodad Capital.</span> We specialize in equity research for <span className="highlightText">traditionally uncovered companies.</span></h2>
        </div>
        </section>
        <div className="articleListHeader">
          <h2>Latest Articles</h2>
          <NavLink to="/articles">See all articles</NavLink>
        </div>
        <ArticleList></ArticleList>
      </div>
    );
  }
}

export default Home;
