import React from 'react'
import './Navbar.css';
import Schedule from './Schedule';
function Navbar() {
  return (
    <div className='nav'>
              <button className='btn'>HOME</button>
              <h >IPL APP🏏</h>
              <button className='btn' onClick={<Schedule/>}>SCHEDULE</button>
              
    </div>
  )
}

export default Navbar;