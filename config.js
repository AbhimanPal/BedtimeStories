 import * as firebase from 'firebase';
 require("@firebase/firestore")
 
 const firebaseConfig = {
    apiKey: "AIzaSyBNiz704FZyUmdO4bM-G-2q7Xmuv3VLTuU",
    authDomain: "storyhub-9083a.firebaseapp.com",
    databaseURL: "https://storyhub-9083a.firebaseio.com",
    projectId: "storyhub-9083a",
    storageBucket: "storyhub-9083a.appspot.com",
    messagingSenderId: "471282617868",
    appId: "1:471282617868:web:e696bb187255ad3db4a829"
  };
  
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
