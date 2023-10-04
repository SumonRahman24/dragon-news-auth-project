import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4Cl5cY7ImpxwtOvCtVnsE98dfiTrSd38",
  authDomain: "dragon-news-auth-project.firebaseapp.com",
  projectId: "dragon-news-auth-project",
  storageBucket: "dragon-news-auth-project.appspot.com",
  messagingSenderId: "149599449542",
  appId: "1:149599449542:web:8d7c09d3b2a6e7f9b582c7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
