
import './App.css';

import Home from './Cmponent/Home/Home';
import About from './Cmponent/About/About';
import Banner from './Cmponent/Banner';
import Image from './Cmponent/Image';

function App() {
  return (
    <div className="App">
      <div className='image'>
         <Image/>
      </div>
      <div className='banner'>
        <Banner/>
      </div>

      <div className='flex'>
        
      <div className='home'>
        <Home/>
      </div>
        

      <div className="about">
        <About/>
      </div>
      </div>




     
    </div>
  );
}

export default App;
