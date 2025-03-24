import React from 'react'
import LeftHeader from './LeftHeader'
import MiddleHeader from './MiddleHeader'
import RightHeader from './RightHeader'

const Header = () => {
  console.log("Rendering Header component")
  return (
    <div className='flex justify-between bg-amber-200 h-16'>
        <LeftHeader />
        <MiddleHeader />
        <RightHeader />
    </div>
  )
}

export default Header