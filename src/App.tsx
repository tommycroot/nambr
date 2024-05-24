import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAbout(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='site-wrapper'>
      <header>
        <NavBar />
      </header>
      <Hero />
     
        <div>
          <About />
          <Services />
          <Contact />
          <footer>Website by Tommy Croot</footer>

        </div>
      
  
    </div>
    
  );
}

export default App;
