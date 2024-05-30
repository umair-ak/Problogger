import { Toolbar,Card,CardContent,Typography, Grid,Box } from '@mui/material'
import React from 'react'

export default function Interests() {
    
    // make an api call to get all the pages that the user can select as interested
    const pages = ['react','angular','vue','html','java','javascript','bootstrap','cpp','python'];
    
  return (
    <div>
    <Toolbar />
    <Box component="main" sx={{width:"80%" , margin:'auto'}}>
    <h2 className='text-5xl pb-3 m-5 text-center'>Select your Interests</h2>
    <p className='text-2xl pb-5 m-5 text-center'>select upto 5 pages</p>
    <Grid container spacing={{ xs: 3}}>
    {pages.map((page)=>{ return(
        <Grid item key={page} xs={2}>
        <Card variant="outlined">
        <CardContent>
        <Typography level="title-md">{page}</Typography>
        </CardContent>
        </Card>
        </Grid>
    )})}
    
    </Grid>
    </Box>
    </div>
  )
}
