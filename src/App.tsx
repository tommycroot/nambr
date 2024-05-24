import { useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {


  useEffect(() => {
    const timer = setTimeout(() => {
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
        <footer>
          <a href="https://thomascroot.com">Website by Tommy Croot</a>
        </footer>

      </div>


    </div>

  );
}

export default App;
