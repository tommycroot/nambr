import React, { useState, useEffect } from 'react';


const Hero = () => {
  const [nambrActiveIndex, setNambrActiveIndex] = useState<number | null>(null);
  const [capitalActiveIndex, setCapitalActiveIndex] = useState<number | null>(null);




  const handleNambrClick = (idx: number) => {
    setNambrActiveIndex(idx);
    setTimeout(() => setNambrActiveIndex(null), 5000);
  };

  const handleCapitalClick = (idx: number) => {
    setCapitalActiveIndex(idx);
    setTimeout(() => setCapitalActiveIndex(null), 5000);
  };

  return (
    <div className='hero'>
      <div className={`word fade-in`}>
        {['N', 'A', 'M', 'B', 'R'].map((letter, idx) => (
          <span
            key={idx}
            onClick={() => handleNambrClick(idx)}
            className={`${nambrActiveIndex === idx ? 'active' : '' }`}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className={`capital-word fade-in-me`}>
        {['C', 'A', 'P', 'I', 'T', 'A', 'L'].map((letter, idx) => (
          <span
            key={idx}
            onClick={() => handleCapitalClick(idx)}
            className={`${capitalActiveIndex === idx ? 'active' : '' } `}
          >
            {letter}
          </span>
        ))}
      </div>
      <p id='play' className={`fade-in`} style={{ animationDelay: '1.5s' }}>Play with the blocks</p>
    </div>
  )
}

export default Hero;
