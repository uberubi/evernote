import React, { useState, useEffect } from "react";
import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import Sidebar from './components/sidebar/Sidebar'
import Editor from './components/editor/Editor'

const App = () => {
  // const [state, setState] = useState({
  //   selectedNoteIndex: null,
  //   selectedNote: null,
  //   notes: [],
  // });
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null)
  const [selectedNote, setSelectedNote] = useState(null)
  const [notes, setNotes] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
      
        const notes = serverUpdate.docs.map((_doc) => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        // setState((prevState) => ({ 
        //   ...prevState,
        //   notes: notes
        //  }));
        setNotes(notes)
        
      });
  }, []);
  
  // console.log(state)
  console.log(notes)

  return (
    <div className="app-container">
      <Sidebar />
      <Editor />
    </div>
  )
};

export default App;
