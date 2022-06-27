import React, { useState } from 'react'
import './Teamplayers.css';
import info from './IPL_Data.json'
function Teamplayers() {
    const[data,setData]= useState(info);
    console.log(info);
  return (
    <div className='container'>

    </div>
  )
}

export default Teamplayers