
import { useState } from 'react';
import './App.css';
import { FirstFold } from './components/FirstFold';
import { NavBar } from './components/NavBar';
import { SecondFold } from './components/SecondFold';

function App() {

  const [user, setUser] = useState( JSON.parse(localStorage.getItem("voosh_data") )|| {});

  const handleSetUser = (data) => {
    setUser(data);
    localStorage.setItem("voosh_data", JSON.stringify(data))
  }

  return (
    <div className="App">
        <NavBar />
        <img className='left_box_bgImg' src="https://voosh.in/static/media/landing_bg.da8497cd24d321282c0d.webp" alt="" />

      <div className='fold_divs'>

        <FirstFold />
        
      <SecondFold user={user} setUser={handleSetUser} />
      </div>
    </div>
  );
}

export default App;
