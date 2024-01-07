import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDixee8xV755BcjlH6PUqR9hCpm64uu0rQ",
  authDomain: "chatapp-4db6d.firebaseapp.com",
  projectId: "chatapp-4db6d",
  storageBucket: "chatapp-4db6d.appspot.com",
  messagingSenderId: "533638828533",
  appId: "1:533638828533:web:45470a7813b19b64acd0bc"
};

export const app = initializeApp(firebaseConfig);