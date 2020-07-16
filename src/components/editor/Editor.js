import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import debounce from "../../helpers";
import { withStyles } from "@material-ui/core/styles";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import styles from "./styles";

const Editor = ({ classes, ...props }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState("");
  console.log(id);

  const updateTitle = async (val) => {
    await setTitle(val);
    update();
  };
  const updateBody = async (val) => {
    await setBody(val);
    update();
  };

  useEffect(() => {
    setBody(props.selectedNote.body);
    setTitle(props.selectedNote.title);
    setId(props.selectedNote.id);
  }, [props.selectedNote, id]);

  const update = debounce(() => {
    props.noteUpdate(id, { title, body });
  }, 1500);

  return (
    <div className={classes.editorContainer}>
      <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
      <input
        className={classes.titleInput}
        placeholder="Note title..."
        value={title ? title : ""}
        onChange={(e) => updateTitle(e.target.value)}
      ></input>
      <ReactQuill value={body} onChange={updateBody} />
    </div>
  );
};

export default withStyles(styles)(Editor);
