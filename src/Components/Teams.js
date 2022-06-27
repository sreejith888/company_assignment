import React, { useState } from 'react';
import './Teams.css';
import csk from '../images/CSK-Logo.png';
import mi from '../images/Mumbai-Indians-logo.png';
import srh from '../images/SRH-team-logo.png';
import kkr from '../images/KKR-Logo.png';
import kings from '../images/Punjab-Kings.png';
import rr from '../images/RR logo.png';
import gt from '../images/Gujarat-Titans-Logo.png';
import Lsg from '../images/Lucnow-Supergiants-IPL-Logo.png';
import DD from '../images/Delhi-Capitals-Logo.png';
import team from './TeamRecords.json';
import rcb from '../images/Royal-Challengers-Bangalore-Logo.png';
import {BrowsweRouter as Router,Route,Routes} from 'react-router-dom';

function Teams() {
  const[teams,SetTeams]=useState(team)
  console.log(teams);
  return (
    <div className='heading'>
      <h>WELCOME TO TATA IPL 2022</h>
    <div className='container'>
<img src={csk} className='selected'/>
<img src={mi} className='selected'/>
<img src={DD} className='selected'/>
<img src={kkr} className='selected'/>
<img src={rcb} className='selected'/>
<img src={kings} className='selected'/>
<img src={srh} className='selected'/>
<img src={Lsg} className='selected'/>
<img src={gt} className='selected'/>
<img src={rr} className='selected'/>
    </div>
    </div>
  )
}

export default Teams;