import firebase from 'firebase';
require('@firebase/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyB8qHvV9lz94FLUqdRRELaQv7N2HPoCSHc",
    authDomain: "book-santa-36315.firebaseapp.com",
    projectId: "book-santa-36315",
    storageBucket: "book-santa-36315.appspot.com",
    messagingSenderId: "83064867649",
    appId: "1:83064867649:web:3a202e793f3cd19a7dafc0"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();