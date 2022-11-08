/* Using firebase/compat to enable v8 functionality
to stay consistent w/ tutorial */

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyaVu6DZ61KK7ptoKhqgRCKdP2JC-EUwY",
  authDomain: "vue-tur.firebaseapp.com",
  projectId: "vue-tur",
  storageBucket: "vue-tur.appspot.com",
  messagingSenderId: "436039500558",
  appId: "1:436039500558:web:9ef88aa31ade6477dc0d5f",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
