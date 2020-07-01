import React from 'react';
import "../css/Articles.css"
import {connect} from 'react-redux'
import ArticleList from './ArticleList';
import Description from './Description';




class Articles extends React.Component {




render(){
    return (
      <div className="Articles">
        <Description title="Doodad Capital Articles" description="See all of our articles here"></Description>
        <h1>Articles</h1>
        <ArticleList></ArticleList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      articles: state.articles
    }
  }
  
  export default connect(mapStateToProps)(Articles);