import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import CallToAction from './components/CTA/CallToAction.js';
import MarketingCopy from './components/MarketingCopy/MarketingCopy.js';

const App = ()=>{

  return(
    <div className='take-home'>
      <Navbar/>
      <MarketingCopy/>
      {/* <CallToAction/> */}
    </div>
  );
};
export default App;
