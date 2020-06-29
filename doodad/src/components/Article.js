import React from 'react';
import "../css/Article.css"
import {connect} from 'react-redux'
//import dompurify from 'dompurify'



class Article extends React.Component {


render(){
    var title = this.props.article === undefined ? "Cant find article" : this.props.article.title;
    var content = this.props.article === undefined ? "" : this.props.article.content;
    return (
      <div className="Article">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let key = ownProps.match.params.article_id;
  return {
    article: state.articles.find(article => article.key === key)
  }
}

export default connect(mapStateToProps)(Article);
