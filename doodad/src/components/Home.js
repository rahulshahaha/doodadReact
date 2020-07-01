import React from 'react';
import "../css/Home.css"
import ArticleList from './ArticleList';



class Home extends React.Component {



render(){
    document.title = "Doodad Capital"
    return (
      <div className="Home">
        <section className="coverPhoto">
        <div className="titleText">
          <h2>Hello, we are <span className="highlightText">Doodad Capital.</span> We specialize in equity research for <span className="highlightText">traditionally uncovered companies.</span></h2>
        </div>
        </section>
        <div className="articleListHeader">
          <h2>Articles</h2>
          <p>Our Latest Articles</p>
        </div>
        <ArticleList></ArticleList>
      </div>
    );
  }
}

export default Home;
