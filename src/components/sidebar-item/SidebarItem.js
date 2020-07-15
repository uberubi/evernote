import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../../helpers'
import {withStyles} from '@material-ui/core/styles'
import BorderColorIcon from '@material-ui/icons/BorderColor'
import styles from './styles'

const SidebarItem = () => {
  return ( 
    <div>Hello from SidebarItem component</div>
   );
}
 
export default withStyles(styles)(SidebarItem);