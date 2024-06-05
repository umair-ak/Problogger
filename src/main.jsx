import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/inter';
import './index.css'
import { Route, RouterProvider, createBrowserRouter, Routes,createRoutesFromElements } from 'react-router-dom';
import Base from './components/Base.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx'
import User from './components/User.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Interests from './pages/Interests.jsx';
import BlogPosts from './components/BlogPosts.jsx';
import MyPosts from './components/MyPosts.jsx';
import Profile from './components/Profile.jsx';
import Messages from './components/Messages.jsx';
import Stats from './components/Stats.jsx';
import CreatePost from './components/CreatePost.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Base />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      
        <Route path='user' element={<User />}>
          <Route path='interests' element={<Interests />} />
          <Route path='dashboard' element={<Dashboard />}>
            <Route index element={<BlogPosts />} />
            <Route path='myposts' element={<MyPosts />} />
            <Route path='profile' element={<Profile />} />
            <Route path='message' element={<Messages />} />
            <Route path='stats' element={<Stats />} />
            <Route path='createpost' element={<CreatePost />} />
          </Route>

        </Route>
    </Route>
        
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
