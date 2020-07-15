import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import debounce from '../../helpers'
import {withStyles} from '@material-ui/core/styles'
import BorderColorIcon from '@material-ui/icons/BorderColor'
import styles from './styles'

const Editor = () => {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [id, setId] = useState('')

  return ( 
    <div>Hello from the editor component</div>
   );
}
 
export default withStyles(styles)(Editor);
