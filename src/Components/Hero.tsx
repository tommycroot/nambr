import { useState, useEffect } from 'react';

const Hero = () => {
  const [nambrActiveIndex, setNambrActiveIndex] = useState<number | null>(null);
  const [capitalActiveIndex, setCapitalActiveIndex] = useState<number | null>(null);
  const [textFadeIn, setTextFadeIn] = useState(false);

  useEffect(() => {
    const fadeInWordsTimer = setTimeout(() => {
      setTextFadeIn(true);
    }, 1500);

    return () => clearTimeout(fadeInWordsTimer);
  }, []);

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
      <div className={`word fade-in ${textFadeIn ? 'show' : ''}`}>
        {['N', 'A', 'M', 'B', 'R'].map((letter, idx) => (
          <span
            key={idx}
            onClick={() => handleNambrClick(idx)}
            className={`${nambrActiveIndex === idx ? 'active' : ''} `}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className={`capital-word fade-in ${textFadeIn ? 'show' : ''}`}>
        {['C', 'A', 'P', 'I', 'T', 'A', 'L'].map((letter, idx) => (
          <span
            key={idx}
            onClick={() => handleCapitalClick(idx)}
            className={`${capitalActiveIndex === idx ? 'active' : ''}`}
          >
            {letter}
          </span>
        ))}
      </div>
      {/* Show the "Click the blocks" message after the words have faded in */}
      <p className={`fade-in ${textFadeIn ? 'show' : ''}`} style={{ transitionDelay: '1.5s' }}>Play with the Blocks</p>
    </div>

  )
}

export default Hero