import React, { useState } from "react";
import ReactQuill from "react-quill";
import debounce from "../../helpers";
import { Divider, Button, withStyles, List } from "@material-ui/core";
import styles from "./styles";
import SidebarItem from "../sidebar-item/SidebarItem";

const Sidebar = ({ notes, classes, selectedNoteIndex, ...props}) => {
  const [addingNote, setAddingNote] = useState(false);
  const [title, setTitle] = useState(null);

  const newNoteBtnClick = () => {
    setAddingNote((addingNote) => !addingNote);
    console.log(addingNote);
  };

  const updateTitle = (text) => {
    setTitle(text);
    console.log("HERE IT IS", text);
  };

  const newNote = () => {
    props.newNote(title)
    setTitle(null)
    setAddingNote(false)
  };

  const selectNote = (n, i) => {
    props.selectNote(n, i);
  };
  const deleteNote = (note) => {
    props.deleteNote(note)
  };

  if (notes) {
    return (
      <div className={classes.sidebarContainer}>
        <Button onClick={newNoteBtnClick} className={classes.newNoteBtn}>
          {addingNote ? "Cancel" : "New Note"}
        </Button>
        {addingNote ? (
          <div>
            <input
              type="text"
              className={classes.newNoteInput}
              placeholder="Enter Note Title"
              onKeyUp={(e) => updateTitle(e.target.value)}
            />
            <Button className={classes.newNoteSubmitBtn} onClick={newNote}>
              SUBMIT NOTE
            </Button>
          </div>
        ) : null}
        <List>
          {notes.map((note, index) => {
            return (
              <div key={index}>
                <SidebarItem
                  note={note}
                  index={index}
                  selectedNoteIndex={selectedNoteIndex}
                  selectNote={selectNote}
                  deleteNote={deleteNote}
                ></SidebarItem>
              </div>
            );
          })}
        </List>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default withStyles(styles)(Sidebar);
