import React from 'react';
import "../css/Articles.css"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'




class Articles extends React.Component {


    articleList = () => {
        var articles = this.props.articles;

        if(articles === undefined){
            return null
        }

        //const sanitizer = dompurify.sanitize;

        var articleList = articles.map(function(s){
            var link = "/articles/" + s.key
            return (
            <div key={s.key}>
            <h1><Link to={{
                pathname: link,
                state: {
                    key: s.key
                }
            }}>{s.title}</Link></h1>
            <p>{s.lead}</p>
            </div>
            );
        });
        return articleList
    }


render(){

    return (
      <div className="Articles">
        {this.articleList()}
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