
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyByTVoFr-witclIHeQzlXQsp69bL79Ufcs",
  authDomain: "evetx-7a8e6.firebaseapp.com",
  projectId: "evetx-7a8e6",
  storageBucket: "evetx-7a8e6.appspot.com",
  messagingSenderId: "526838510971",
  appId: "1:526838510971:web:7613cb7b7605b6d7d4b9de",
  measurementId: "G-4QP22DMBKY"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)

});

export {auth};  
