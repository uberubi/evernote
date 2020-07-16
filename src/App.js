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

  const selectNote = (note, index) => {
    setSelectedNoteIndex(index);
    setSelectedNote(note);
    console.log(selectedNoteIndex, '    ',selectedNote )
  };

  const noteUpdate = (id, noteObj) => {
    if (id === '') return null
    firebase
      .firestore()
      .collection('notes')
      .doc(id)
      .update({
        title: noteObj.title,
        body: noteObj.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
  }

  const newNote = async (title) => {
    const note = {
      title,
      body: ''
    }

    const newFromDB = await firebase
      .firestore()
      .collection('notes')
      .add({
        title: note.title,
        body: note.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      const newID = newFromDB.id
      await setNotes([...notes, note])
      const newNoteIndex = notes.indexOf(notes.filter(note => note.id === newID)[0])
      setSelectedNote(notes[newNoteIndex])
      setSelectedNoteIndex(notes[newNoteIndex])
  }

  const deleteNote = (note) => {
    const noteIndex = notes.indexOf(note)
    // await setNotes(notes.filter(_note => _note !== note))
    if (selectedNoteIndex === noteIndex) {
      setSelectedNoteIndex(null)
      setSelectedNote(null)
    } else {
      notes.length > 1 ?
      selectNote(notes[selectedNoteIndex - 1], selectedNoteIndex - 1) :
      setSelectedNoteIndex(null)
      setSelectedNote(null)
    }

    firebase
      .firestore()
      .collection('notes')
      .doc(note.id)
      .delete()
  }

  return (
    <div className="app-container">
      <Sidebar
        selectedNoteIndex={selectedNoteIndex}
        notes={notes}
        deleteNote={deleteNote}
        selectNote={selectNote}
        newNote={newNote}
        setSelectedNoteIndex={setSelectedNoteIndex}
      />
      {selectedNote ? (
        <Editor
          selectedNote={selectedNote}
          selectedNoteIndex={selectedNoteIndex}
          notes={notes}
          noteUpdate={noteUpdate}
        />
      ) : null}
    </div>
  );
};

export default App;
