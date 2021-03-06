import React from 'react';
import "../css/ArticleList.css"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'




class ArticleList extends React.Component {


    articleList = () => {
        var articles = this.props.articles;

        if(articles === undefined){
            return null
        }

        //const sanitizer = dompurify.sanitize;

        articles.sort(function(a,b){
            var returnValue = 0;
            if(a.createdDate === undefined || b.createdDate === undefined){
                return returnValue;
            }
            //return a.attributes.OBJECTID - b.attributes.OBJECTID;
            if(a.createdDate.toDate() === b.createdDate.toDate())
                returnValue = 0;
            if(a.createdDate.toDate() < b.createdDate.toDate())
                returnValue = 1;
            if(a.createdDate.toDate() > b.createdDate.toDate())
                returnValue = -1;

           return returnValue
        });

        var articleList = articles.map(function(s){
            var date = ""
            var ISODate = ""
            if(s.createdDate !== undefined){
                date = s.createdDate.toDate();
                ISODate = date.toISOString();
                date = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
            }


            var link = "/articles/" + s.key
            return (
            <div className="listedArticle" key={s.key}>
            <Link className="articleTitle" to={{
                pathname: link,
                state: {
                    key: s.key
                }
            }}>{s.title}</Link>
            <time dateTime={ISODate}>{date}</time>
            <p className="leadText">{s.lead}</p>
            </div>
            );
        });
        return articleList
    }


render(){

    return (
      <div className="ArticleList">
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
  
  export default connect(mapStateToProps)(ArticleList);