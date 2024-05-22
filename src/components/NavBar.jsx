import React from 'react'
import "./navstyle.css"

export default function NavBar() {
  return (
    <div> <ul>
    <li><a className="active" href="#home">Home</a></li>
    <li><a href="#Newpost">New Post</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
  </ul></div>
    
  )
}
