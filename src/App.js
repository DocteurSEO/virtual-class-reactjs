import "./scss/App.scss";
import { useState, useEffect } from "react";

import { Header } from "./components/ui/Header/Header";
import { Cards } from "./components/Cards/Cards";
import { Form } from "./components/Form/Form";
import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNowSSJxp5oL9x10m8Tyw928WfeO2_3JI",
  authDomain: "virtualclass-5022b.firebaseapp.com",
  databaseURL:
    "https://virtualclass-5022b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "virtualclass-5022b",
  storageBucket: "virtualclass-5022b.appspot.com",
  messagingSenderId: "973819606144",
  appId: "1:973819606144:web:a596ddf9afe3e87bc5a265",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const ref = firebase.database().ref().child("user");

function App() {
  const [name, setAnme] = useState("initialState");
  useEffect(() => {
    console.log("ok");
    ref.on("value", (snapshot) => {
      setAnme(snapshot.val().name);
      console.log(snapshot.val());
    });
  }, []);
  return (
    <div className="App">
      <Header text={name} />
      <Form />
      <Cards />
    </div>
  );
}

export default App;
