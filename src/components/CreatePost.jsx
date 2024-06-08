import React, { useRef, useState } from 'react'
import { Box, Toolbar,TextField, Typography, Button } from '@mui/material'
import JoditEditor from 'jodit-react';

export default function CreatePost() {

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get('title'),
      content: content,
    });
  };
  
  return (
    <Box component="main" sx={{width:"80%"}}>
    <Toolbar />
        <Box
        component="form"
        sx={{
          margin:"2rem",
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
      <Typography variant='h4'> Whats on your Mind ? </Typography>
      <TextField name='title' id="title" label="Title of Your Blog" variant="standard" fullWidth margin='normal' InputProps={{
        style: { fontSize: '2rem' }, // Set font size
      }}size='large'/>
        
       <JoditEditor 
       ref = {editor}
       value = {content}
       onChange={newContent=>setContent(newContent)}
       />

       <Button sx={{mt:'1rem'}} type='submit' color='primary' variant='contained' disabled={content.length==0}>Post</Button>
      </Box>
    </Box>
  )
}
