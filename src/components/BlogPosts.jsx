import React from 'react'
import { Box,Grid,Toolbar } from '@mui/material'
import BlogPostCard from './BlogPostCard'

export default function BlogPosts() {
  return (
    <Box component="main" sx={{width:"80%"}}>
    <Toolbar />
    <Grid container spacing={{ xs: 2}} >
    
    <Grid item xs={4} ><BlogPostCard /></Grid>
    <Grid item xs={4} ><BlogPostCard /></Grid>
    <Grid item xs={4} ><BlogPostCard /></Grid>
    <Grid item xs={4} ><BlogPostCard /></Grid>
    <Grid item xs={4} ><BlogPostCard /></Grid>
    <Grid item xs={4} ><BlogPostCard /></Grid>
    
    </Grid>
    
    </Box>
  )
}
