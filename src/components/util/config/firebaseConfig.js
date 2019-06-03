import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgJQ7LzIPBvV9YLAoubWYFeGgAhdgeaaE",
  authDomain: "burger-queen-eba7f.firebaseapp.com",
  databaseURL: "https://burger-queen-eba7f.firebaseio.com",
  projectId: "burger-queen-eba7f",
  storageBucket: "burger-queen-eba7f.appspot.com",
  messagingSenderId: "92948560345",
  appId: "1:92948560345:web:cf972ca5f85a3b10"
};

firebase.initializeApp(firebaseConfig);

export default firebase;