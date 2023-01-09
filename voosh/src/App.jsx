
import './App.css';
import { FirstFold } from './components/FirstFold';
import { NavBar } from './components/NavBar';
import { SecondFold } from './components/SecondFold';

function App() {
  return (
    <div className="App">
        <NavBar />
        <img className='left_box_bgImg' src="https://voosh.in/static/media/landing_bg.da8497cd24d321282c0d.webp" alt="" />

      <div className='fold_divs'>

        <FirstFold />
        
      <SecondFold />
      </div>
    </div>
  );
}

export default App;
