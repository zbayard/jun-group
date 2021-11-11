import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Body from './components/MarketingCopy/MarketingCopy.js';
import CallToAction from './components/CTA/CallToAction.js';

const App = ()=>{

  return(
    <div className='take-home'>
      <Navbar/>
      <Body/>
      {/* <CallToAction/> */}
    </div>
  );
};
export default App;
