import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDZTG6fGgR9djR49-nL8_WTgVQMRiJy7mM",
  authDomain: "flashcard-dev-4d446.firebaseapp.com",
  databaseURL: "https://flashcard-dev-4d446.firebaseio.com",
  projectId: "flashcard-dev-4d446",
  storageBucket: "flashcard-dev-4d446.appspot.com",
  messagingSenderId: "462011428722"
};

firebase.initializeApp(config);

export default firebase;
