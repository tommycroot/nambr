import React, { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='services' ref={servicesRef}>
      <h1>S<span className='second-letter'>E</span><span className='third-letter'>R</span><span className='forth-letter'>V</span><span className='fifth-letter'>I</span><span className='third-letter'>C</span><span className='second-letter'>E</span>S</h1>
      <div className='wrapped-services'>
        <div className='business'>
          <h2>Business</h2>
          <ul>
            <li className={isVisible ? 'staggeredAnimate' : ''}>General Accountancy services including but not limited to annual accounts, taxation, book-keeping and payroll.</li>
            <li className={isVisible ? 'staggeredAnimate' : ''}>Financial and Management reporting </li>
            <li className={isVisible ? 'staggeredAnimate' : ''}>Corporate treasury services together with guidance on strategy and execution</li>
            <li className={isVisible ? 'staggeredAnimate' : ''}>Expert guidance on Research and Development Tax Credits for tech start ups</li>
            <li className={isVisible ? 'staggeredAnimate' : ''}>Assistance with securing new funding</li>
            <li className={isVisible ? 'staggeredAnimate' : ''}>General advisory services to meet your needs</li>
          </ul>
        </div>
        <div className='individual'>
          <h2>Individual</h2>
          <ul>
            <li className={isVisible ? 'staggeredAnimate' : ''}>Personalised approach to help you start your investment journey or re-balance your investment portfolio</li>
            <li className={isVisible ? 'staggeredAnimate' : ''}>Expert guidance on specific Stocks and Shares </li>
            <li className={isVisible ? 'staggeredAnimate' : ''}>Expert guidance on other alternative investment opportunities such as Bitcoin</li>
            <li className={isVisible ? 'staggeredAnimate' : ''}>General advisory services to meet your needs</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Services;
