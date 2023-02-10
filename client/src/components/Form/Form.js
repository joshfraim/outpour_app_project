import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createPost } from '../../actions/posts';
    
const Form = () => {
  const [postData, setPostData] = useState({ creator: '', message: '', tags: ''});
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));

  }
  
  const clear = () => {

  }
  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit= {handleSubmit}>
      <Typography variant='h6'>Creating a Post</Typography>
      <TextField name= 'creator' variant='outlined' label='Creator' fullWidth value={postData.creator}onChange= {(e) => setPostData({ ...postData, creator: e.target.value})} /> 
      <TextField name= 'message' variant='outlined' label='message' fullWidth value={postData.message}onChange= {(e) => setPostData({ ...postData, message: e.target.value})} /> 
      <TextField name= 'tags' variant='outlined' label='tags' fullWidth value={postData.tags}onChange= {(e) => setPostData({ ...postData, tags: e.target.value})} /> 
      <Button className={classes.buttonSubmit} variant= 'contained' color= 'primary' size='large' type='submit' fullWidth>Post</Button>
      <Button variant= 'contained' color= 'secondary' size='small' onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form;