import { useState, useEffect, useRef } from 'react';

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
      <h1>S<span className='fifth-letter'>E</span><span className='third-letter'>R</span><span className='forth-letter'>V</span><span id='i' className='fifth-letter'>I</span><span className='third-letter'>C</span><span className='second-letter'>E</span><span id='S'>S</span></h1>
      <div className='wrapped-services'>
        <div className='business'>
          <h2>Business</h2>
          <ul>
            <li className={isVisible ? 'staggeredAnimate delay-0' : 'hide'}>General accountancy services including, but not limited to annual accounts, taxation, book-keeping and payroll</li>
            <li className={isVisible ? 'staggeredAnimate delay-1' : 'hide'}>Financial and management reporting</li>
            <li className={isVisible ? 'staggeredAnimate delay-2' : 'hide'}>Corporate treasury services together with guidance on strategy and execution</li>
            <li className={isVisible ? 'staggeredAnimate delay-3' : 'hide'}>Expert guidance on Research and Development Tax Credits for tech start ups</li>
            <li className={isVisible ? 'staggeredAnimate delay-4' : 'hide'}>Assistance with securing new funding</li>
            <li className={isVisible ? 'staggeredAnimate delay-5' : 'hide'}>General advisory services to meet your needs</li>
          </ul>
        </div>
        <div className='individual'>
          <h2>Individual</h2>
          <ul>
            <li className={isVisible ? 'staggeredAnimate delay-0' : 'hide'}>Personalised approach to help you start your investment journey or re-balance your investment portfolio</li>
            <li className={isVisible ? 'staggeredAnimate delay-1' : 'hide'}>Expert guidance on specific stocks and shares</li>
            <li className={isVisible ? 'staggeredAnimate delay-2' : 'hide'}>Expert guidance on other alternative investment opportunities such as Bitcoin</li>
            <li className={isVisible ? 'staggeredAnimate delay-3' : 'hide'}>General advisory services to meet your needs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
