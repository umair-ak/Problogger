import { Toolbar,Card,CardContent,Typography, Grid,Box, CardActionArea } from '@mui/material'
import React from 'react'
import { useState } from 'react';

export default function Interests() {
    
    // make an api call to get all the pages that the user can select as interested
    let p = ['react','angular','vue','html','java','javascript','bootstrap','cpp','python'];

    const [pages, setPages] = useState(p);

    const [selected, setSelected] = useState([]);

    const handlePages = (page) =>{
        setPages(pages.filter((i)=>  i!=page));
        setSelected([...selected,page]);
        console.log("selected"+selected)
        console.log("pages"+pages)
      }
      
      const handleSelected = (page) =>{
        setSelected(selected.filter((i)=>  i!=page));
        setPages([...pages,page])
        console.log("selected"+selected)
        console.log("pages"+pages)
    }
  return (
    <div>
    <Toolbar />
    <Box component="main" sx={{width:"80%" , margin:'auto'}}>
    <h2 className='text-5xl pb-3 m-5 text-center'>Select your Interests</h2>
    <p className='text-2xl pb-5 m-5 text-center'>select upto 5 pages</p>
    <Grid container spacing={{ xs: 3}}>
    {selected.map((s)=>{return(
      <Grid item key={s} xs={2}>
      <Card variant="outlined" sx={{backgroundColor:"#607d8b"}}>
        <CardActionArea onClick={()=>handleSelected(s)}>
        <CardContent>
        <Typography level="title-md">{s}</Typography>
        </CardContent>
        </CardActionArea>
        </Card>
      </Grid>
    )})}
    
    {pages.map((page)=>{ return(
        <Grid item key={page} xs={2}>
        <Card variant="outlined">
        <CardActionArea onClick={()=>handlePages(page)}>
        <CardContent>
        <Typography level="title-md">{page}</Typography>
        </CardContent>
        </CardActionArea>
        </Card>
        </Grid>
    )})}
    
    </Grid>
    </Box>
    </div>
  )
}
