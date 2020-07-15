import React, { useState } from "react";
import ReactQuill from "react-quill";
import debounce from "../../helpers";
import { withStyles } from "@material-ui/core/styles";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import styles from "./styles";

const Editor = ({ classes }) => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  
  const updateBody = async (val) => {
    await setText(val)
    update() 
  }

  const update = debounce(() => {
    console.log('updating database')
    // come back later
  }, 1500)

  return (
    <div className={classes.editorContainer}>
      <ReactQuill 
        value={text} 
        onChange={updateBody}
      />
    </div>
  );

};

export default withStyles(styles)(Editor);
