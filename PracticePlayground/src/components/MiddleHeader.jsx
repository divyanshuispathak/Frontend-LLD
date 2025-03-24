import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { NavLink } from 'react-router-dom'

const MiddleHeader = () => {
  return (
    <div className='flex gap-5 p-2 m-2'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default MiddleHeader