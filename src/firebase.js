import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

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