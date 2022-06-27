import './App.css';
import Navbar from './Components/Navbar';
import Teams from './Components/Teams';
import Schedule from './Components/Schedule';
import Players from './Components/Players';
import Playerdetails from './Components/Playerdetails';
import Footer from './Components/Footer';
import Teamplayers from './Components/Teamplayers';
function App() {
  return (
    <div className="App">
  <Navbar/>
  <Teams/>
  <Teamplayers/>
  <Schedule/>
  <Players/>
  <Playerdetails/>
  <Footer/> 
    </div>
  );
}

export default App;
