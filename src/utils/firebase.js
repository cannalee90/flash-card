import * as firebase from "firebase";
import Config from '../config';

const { firebase: firebaseConfig } = Config;

firebase.initializeApp(firebaseConfig);

export default firebase;
