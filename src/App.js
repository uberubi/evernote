import React, { useState, useEffect } from "react";
import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import Sidebar from "./components/sidebar/Sidebar";
import Editor from "./components/editor/Editor";

const App = () => {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
        const notes = serverUpdate.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        setNotes(notes);
      });
  }, []);

  // console.log(state)
  console.log(notes);

  return (
    <div className="app-container">
      <Sidebar selectedNoteIndex={selectedNoteIndex} notes={notes} />
      <Editor />
    </div>
  );
};

export default App;
