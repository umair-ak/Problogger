/* eslint-disable react/prop-types */
import * as React from 'react';
import NavBar from './NavBar';

export default function Base({children}) {
  return (
    <div>
   <NavBar />
    {children}
    </div>
        );
}
