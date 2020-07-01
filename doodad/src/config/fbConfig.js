  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/storage'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAzBrqlSoBpuAhVz8M2qqNyH5Hx7BW8SNU",
    authDomain: "doodad-capital.firebaseapp.com",
    databaseURL: "https://doodad-capital.firebaseio.com",
    projectId: "doodad-capital",
    storageBucket: "doodad-capital.appspot.com",
    messagingSenderId: "811654475890",
    appId: "1:811654475890:web:7eaeea71c7d56f932192eb",
    measurementId: "G-SLSLSBMB4H"
  };

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})


export default firebase