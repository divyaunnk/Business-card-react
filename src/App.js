import Contacts from './Components/Contacts';
import jim from '../../business-card/src/images/jim-halpert.jpg';
import dwight from '../../business-card/src/images/dwight-schrute.jpg';
import micheal from '../../business-card/src/images/michael-scott.jpg';
import pam from '../../business-card/src/images/pam.jfif';

import './App.css';

function App() {
  return (
    <div className='contacts'>
    <Contacts 
      img={jim}
      name="Jim Halpert"
      phone="(212) 551-8977" 
      email="jim-halpert@hotmail.com" />
    <Contacts 
      img={dwight}
      name="Dwight Schrute"
      phone="(212) 761-8977" 
      email="dwight-schrute@hotmail.com"/>
    <Contacts 
    img={micheal}
    name="Micheal Scott"
    phone="(212) 334-6377" 
    email="micheal-scott@hotmail.com" />
    <Contacts 
      img={pam}
      name="Pam Besley"
      phone="(212) 511-9257" 
      email="pam@hotmail.com" />
    </div>
  );
}

export default App;
