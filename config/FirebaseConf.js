import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCoXKCVfRF2vSqysBuN8nAHe966La8_dC4",
  authDomain: "hospital-app-de4dc.firebaseapp.com",
  databaseURL: "https://hospital-app-de4dc-default-rtdb.firebaseio.com",
  projectId: "hospital-app-de4dc",
  storageBucket: "hospital-app-de4dc.appspot.com",
  messagingSenderId: "949156787710",
  appId: "1:949156787710:web:654a0d9c93b251c446bcaf"
};

// Initialize Firebase
let app;
if(firebase.apps.length==0){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app();
}

const storage = firebase.storage();

export{storage};