import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyaVu6DZ61KK7ptoKhqgRCKdP2JC-EUwY",
  authDomain: "vue-tur.firebaseapp.com",
  projectId: "vue-tur",
  storageBucket: "vue-tur.appspot.com",
  messagingSenderId: "436039500558",
  appId: "1:436039500558:web:9ef88aa31ade6477dc0d5f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
