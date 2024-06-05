import React from 'react'
import { useState } from 'react';
import {ListItem,Divider,List,Toolbar,CssBaseline,Drawer,Box,ListItemButton,ListItemIcon,ListItemText,Grid} from '@mui/material'


import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Person2Icon from '@mui/icons-material/Person2';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreateIcon from '@mui/icons-material/Create';
import { Outlet,Link } from 'react-router-dom';

export default function Dashboard() {

  // store the interest in a store or in the database and get them using an api call 
  const [interests,setInterest] = useState(['React','Angular','JavaScript']);
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
          {[{text:'Dashboard',icon:<DashboardIcon />,link:''},
           {text:'My posts',icon:<PostAddIcon />,link:'myposts'},
           {text:'Profile',icon:<Person2Icon />,link:'profile'},
           {text:'Messages',icon:<MailIcon />,link:'messages'}, 
           {text:'Stats',icon:<BarChartIcon />,link:'stats'},
           {text:'Create post',icon:<CreateIcon />,link:'createpost'}].map((i) => (
             <Link to={i.link} key={i.text}>
            <ListItem  disablePadding>
              <ListItemButton>
              <ListItemIcon>
              {i.icon}
              </ListItemIcon>
              <ListItemText primary={i.text} />
              </ListItemButton>
              </ListItem>
              </Link>
          ))}
        </List>
        <Divider />
        <List>
          {interests.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
    <Outlet/>
    
    <Box component='aside'>
    <Toolbar />
    <h1>Display some content here</h1>
    
    </Box>

    </Box>
    
    );
  }
