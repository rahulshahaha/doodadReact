import React from 'react';
import "../css/Home.css"
import Articles from './Articles';



class Home extends React.Component {



render(){
    return (
      <div className="Home">
        <section className="coverPhoto">
        <div className="titleText">
          <h2>Hello, we are <span className="highlightText">Doodad Capital.</span> We specialize in equity research for <span className="highlightText">traditionally uncovered companies.</span></h2>
        </div>
        </section>
        <div className="articleListHeader">
          <h2>Articles</h2>
        </div>
        <Articles></Articles>
      </div>
    );
  }
}

export default Home;
