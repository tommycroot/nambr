import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    setActiveIndex(idx);
    setTimeout(() => setActiveIndex(null), 5000);
  };

  return (
    <div className='site-wrapper'>
      <header>
        <NavBar />
      </header>
      <div className='hero'>
      <p id='clickMe'>Click the blocks</p>
        <div className="word">
       

          {['N', 'A', 'M', 'B', 'R'].map((letter, idx) => (
            <span
              key={idx}
              onClick={() => handleClick(idx)}
              className={activeIndex === idx ? 'active' : ''}
            >
              {letter}
            </span>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default App;
