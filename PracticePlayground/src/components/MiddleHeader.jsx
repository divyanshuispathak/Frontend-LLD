import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { NavLink } from 'react-router-dom'

const MiddleHeader = () => {
  return (
    <div className='flex gap-5 p-2 m-2'>
        <NavLink className="hover:bg-cyan-400" to='/home'>Home</NavLink>
        <NavLink className="hover:bg-cyan-400" to='/about'>About</NavLink>
        <NavLink className="hover:bg-cyan-400" to='/contact'>Contact</NavLink>
        <NavLink className="hover:bg-cyan-400" to='/accordion'>Accordion</NavLink>
        <NavLink className="hover:bg-cyan-400" to='/nested-comments'>Nested-Comments</NavLink>
        <NavLink className="hover:bg-cyan-400" to='/image'>Image Slider</NavLink>
        <NavLink className="hover:bg-cyan-400" to='/uber'>Uber Interview</NavLink>
        <NavLink className="hover:bg-cyan-400" to='/counter'>Counter</NavLink>
    </div>
  )
}

export default MiddleHeader