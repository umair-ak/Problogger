import React from 'react'
import "./navstyle.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';


const defaultTheme = createTheme({
  palette: {
  primary: {
    main: blueGrey[500],
  },
  secondary: {
    main: blueGrey[700],
  },
}});

export default function NavBar() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <ul className='w-screen'>
    <li><Link to='/' className="active" href="#home">Home</Link></li>
    <li><Link to='login' >New Post</Link></li>
    <li><Link to="#">Contact</Link></li>
    <li><Link to="#">About</Link></li>
    </ul>
   
    </ThemeProvider>
    
  )
}
