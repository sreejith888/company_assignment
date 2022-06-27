import React, { useState } from 'react';
import './Schedule.css';
import info from "./IplData.json";
function Schedule() {
  const [data,setData]=useState(info);
const [cskclicked,SetCskClicked]=useState(false);
const [players,setPlayers]=useState([]);

const renderPlayers=(id)=>{ 
  let Team_Data= data.filter((item)=>{
  if(item.Team_Id===id) {
    return item;
  }
});
let Team_Players = Team_Data[0].Team_Players;
setPlayers(Team_Players);
}


  return (
    <>
    
      <div className="another">

{
  players.map((item)=>{
  
    console.log(item);
    return(
      
      <div className="cards">
      <img src="https://medicaresupp.org/wp-content/uploads/2017/01/0d36e7a476b06333d9fe9960572b66b9.jpg" alt="NO IMAGE FOUND" /> 
      <p>{item.Name}</p>
      <div><a href={item.Url}>View More</a></div>
      </div>

    )
  })
}
</div>  
<div className='schedule_cont'>   
      <ul>
        <button onClick={()=>renderPlayers("3")}>CSK</button>
        <button onClick={()=>renderPlayers("7")} >MI</button>
        <button onClick={()=>renderPlayers("1")}>KKR</button>
        <button onClick={()=>renderPlayers("2")}>RCB</button>
        <button onClick={()=>renderPlayers("8")}>SRH</button>
        <button onClick={()=>renderPlayers("5")}>RR</button>
        <button onClick={()=>renderPlayers("9")}>GT</button>
        <button onClick={()=>renderPlayers("7")} >LSG</button>
        <button onClick={()=>renderPlayers("4")}>PKBS</button>
      </ul>
    </div>>
    </>
  );

}
export default Schedule;