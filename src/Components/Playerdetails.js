import React, { useState } from 'react';
import './PlayerDetails.css';
import info from './IPL_Data.json';


function Playerdetails() {
  const [players,setPlayers]=useState(info);
   let [clicked, setClicked] = useState(false);
  console.log(players);
  return (
    <div className='cards'>
     {( clicked?
      players.map((item)=>{
        return(
             <div className='card'>
          <img src="https://medicaresupp.org/wp-content/uploads/2017/01/0d36e7a476b06333d9fe9960572b66b9.jpg" alt="NO IMAGE FOUND" /> 
        <div>{item.Name}</div>
        <div>Matches played:{item.MatchPlayed}</div>
        <div>Runs scored:{item.RunsScored}</div>
        <div><a href={item.Url}>View More</a></div>
        </div>
       ) })
    :null) }
     {!clicked && <button onClick={() => setClicked(true)}>Show All Players </button>}
        {clicked && <button onClick={() => setClicked(false)}>Hide</button>}
    </div>
  )
}

export default Playerdetails;