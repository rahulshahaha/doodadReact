import React from 'react';
import "firebase/firestore";
import "firebase/storage";
import * as firebase from "firebase/app";
import "./css/App.css"
import Nav from "./components/Nav"
import Home from './components/Home';
import Articles from './components/Articles';
import Article from './components/Article';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import ScrollToTop from './components/ScrollToTop';



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
// const storage = firebase.storage();

// var storageRef = storage.ref();
// //var imagesRef = storageRef.child('Images');
// var spaceRef = storageRef.child('Images/VTIQChart.png').getDownloadURL().then(function(url) {
//   console.log(url)
// }).catch(function(error) {
//   // Handle any errors
// });
// console.log(spaceRef.fullPath)

db.enablePersistence()
  .catch(function(err) {
      if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });



class App extends React.Component {


componentDidMount(){
  
  db.collection('articles').onSnapshot(articles => {
    var articleList = [];
    articles.docs.forEach(doc => {
      var articleInfo = doc.data();
      var id = {key: doc.id}
      articleInfo = {...articleInfo, ...id}
      articleList.push(articleInfo);
    })
    //console.log(articleList)
    this.props.updateArticles(articleList)
  })
}

render(){
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <Nav></Nav>
            <Route exact path="/" component={Home} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/articles/:article_id" component={Article} />
          </div>
        </ScrollToTop>
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
