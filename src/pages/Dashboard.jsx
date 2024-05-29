import React from 'react'
import {ListItem,Divider,List,Toolbar,CssBaseline,Drawer,Box,ListItemButton,ListItemIcon,ListItemText,Grid} from '@mui/material'


import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import BlogPostCard from '../components/BlogPostCard';

export default function Dashboard() {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
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
    
    <Box component='aside'>
    <Toolbar />
    <h1>Display some content here</h1>
    
    </Box>

    </Box>
    
    );
  }
