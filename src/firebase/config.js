import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyV3D5ULlMG-iYtT6Kq0WiyjBBlAsuz0Q",
  authDomain: "react-app-8510f.firebaseapp.com",
  projectId: "react-app-8510f",
  storageBucket: "react-app-8510f.appspot.com",
  messagingSenderId: "18188578023",
  appId: "1:18188578023:web:751b63d02cd3585bc94642"
};

//Inicializacion 

const app=firebase.initializeApp(firebaseConfig)

export const getfirestore = ()=>{
    return firebase.firestore(app)
}