import React from 'react';
import "../css/Article.css"
import {connect} from 'react-redux'
import Description from './Description';
//import dompurify from 'dompurify'



class Article extends React.Component {


render(){

    var title = "Doodad Capital"
    title = this.props.article === undefined ? "Cant find article" : this.props.article.title;
    var content = this.props.article === undefined ? "" : this.props.article.content;
    var date = this.props.article === undefined ? "" : this.props.article.createdDate.toDate();
    var ISODate = this.props.article === undefined ? "" : date.toISOString();
    date = this.props.article === undefined ? "" : ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
    var lead = this.props.article === undefined ? "" : this.props.article.lead;

    return (
      <div className="Article">
        <Description title={title} description={lead} type="article"></Description>
        <h1>{title}</h1>
        <time dateTime={ISODate}>{date}</time>
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
