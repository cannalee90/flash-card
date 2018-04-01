import * as firebase from "firebase";
import Config from '../config';

const { firebase: firebaseConfig } = Config;
console.log(firebaseConfig)

firebase.initializeApp(firebaseConfig);

export default firebase;
