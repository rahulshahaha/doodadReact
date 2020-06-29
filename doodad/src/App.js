import React from 'react';
import "firebase/firestore";
import * as firebase from "firebase/app";
import "./css/App.css"
import Nav from "./components/Nav"
import Home from './components/Home';
import Articles from './components/Articles';
import Article from './components/Article';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAzBrqlSoBpuAhVz8M2qqNyH5Hx7BW8SNU",
    authDomain: "doodad-capital.firebaseapp.com",
    databaseURL: "https://doodad-capital.firebaseio.com",
    projectId: "doodad-capital",
    storageBucket: "doodad-capital.appspot.com",
    messagingSenderId: "811654475890",
    appId: "1:811654475890:web:7eaeea71c7d56f932192eb",
    measurementId: "G-SLSLSBMB4H"
  };
  // Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const auth = firebase.auth();
const db = firebase.firestore();




class App extends React.Component {


componentDidMount(){
  var articleList = [];
  db.collection('articles').onSnapshot(articles => {
    console.log("snap")
    articles.docs.forEach(doc => {
      var articleInfo = doc.data();
      var id = {key: doc.id}
      articleInfo = {...articleInfo, ...id}
      articleList.push(articleInfo);
    })
    this.props.updateArticles(articleList)
  })
}

render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Nav></Nav>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route path="/articles/:article_id" component={Article} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      articles: state.articles
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateArticles: (newArticles) => {dispatch({type: "UPDATE_ARTICLES", newArticles: newArticles})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
