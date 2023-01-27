import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAE-a1CC29aD3Ild53D8G5K36D85BzBV1k",
    authDomain: "vue-blog-system-e3200.firebaseapp.com",
    projectId: "vue-blog-system-e3200",
    storageBucket: "vue-blog-system-e3200.appspot.com",
    messagingSenderId: "1006459329832",
    appId: "1:1006459329832:web:842dca9c54c4cef99b041d"
  };

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export {db};