import React from "react";
import ReactQuill from "react-quill";
import debounce, { removeHTMLTags } from "../../helpers";
import { withStyles } from "@material-ui/core/styles";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import styles from "./styles";
import { ListItem, ListItemText } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete'

const SidebarItem = ({ index, note, classes, selectedNoteIndex, ...props }) => {
  
  const selectNote = (n, i) => props.selectNote(n,i)
  const deleteNote = (note) => {
    if (window.confirm(`Are you sure you want to delete: ${note.title}`)) {
      props.deleteNote(note)
    }
  }
  
  return (
    <div key={index}>
      <ListItem
        className={classes.listItem}
        selected={selectedNoteIndex === index}
        alignItems="flex-start"
      >
        <div
          className={classes.textSection}
          onClick={() => selectedNoteIndex(note, index)}   
        >
          <ListItemText
            primary={note.title}
            secondary={removeHTMLTags(note.body.substring(0,30) + '...')}
          >
          </ListItemText>
        </div>
        <DeleteIcon 
          onClick={() => deleteNote(note)}
          className={classes.deleteIcon}
        ></DeleteIcon>

        
      </ListItem>
    </div>
  );
};

export default withStyles(styles)(SidebarItem);
