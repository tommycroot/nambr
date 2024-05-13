import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';

function App() {
  const [nambrActiveIndex, setNambrActiveIndex] = useState<number | null>(null);
  const [capitalActiveIndex, setCapitalActiveIndex] = useState<number | null>(null);
  const [textFadeIn, setTextFadeIn] = useState(false);

  useEffect(() => {
    // Set a timeout to fade in the words after a delay of 2000 milliseconds
    const fadeInWordsTimer = setTimeout(() => {
      setTextFadeIn(true);
    }, 1500);

    // Clear the timer when the component unmounts or when the words have faded in
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
    <div className='site-wrapper'>
      <header>
        <NavBar />
      </header>
      <div className='hero'>
        {/* Apply the fade-in animation to the word and capital-word elements */}
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
        <p className={`fade-in ${textFadeIn ? 'show' : ''}`} style={{ transitionDelay: '1.5s' }}>Click the Blocks</p>
      </div>
      <div className='about'>
      <h1>Who am I?</h1>
      <p><span id='joe'>Joe Rayner FCCA, Chartered Financial Accountant</span><br></br><br></br>
        Whether you are an Enterprising Individual or Innovative Business my personalised CFO service is a neat and affordable solution to help you <span id='big-text'>achieve your goals.</span><br></br><br></br>
          NAMBR is a play on the word NUMBER but the letters are also my son&apos;s initials. Why am I telling you this?  My approach is not just to focus on your immediate goals. Ultimately my service is all about building for the future and I will help you achieve your long-term financial objectives.
          <br></br><br></br>Together I will help you build a sustainable and profitable business or a sound and resilient investment portfolio with the intention of building <span id='big-text'>long term wealth.</span>
        </p>
      </div>

      <div className='about-me'>
        <p>
          I have a unique blend of expertise in finance, private equity and Investments and have provided development consultancy advice to a number of new start-up businesses including the setting up, structuring and raising of capital. Where your business has reached the stage of needing a Chief Financial Officer, I can replicate that role either remotely or as a regular part of your team.
          I have a deep understanding of financial markets and proven track record of identifying trends and opportunities which has been fruitful for me personally. I take an active and discretionary approach to portfolio construction.

        </p>
      </div>
    </div>
  );
}

export default App;
