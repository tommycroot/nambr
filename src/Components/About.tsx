import joe from '../images/joe.jpg'
const About = () => {

  return (
    <div className='about-main'>
      <h1>A<span className='fifth-letter'>B</span><span className='third-letter'>O</span><span className='second-letter'>U</span><span id='T'>T</span></h1>
      <div className='about'>

        <h2>Joe Rayner FCCA, Chartered Financial Accountant</h2>
        <div className='image-container'>

          <img src={joe} id='joe' alt="Joe Rayner" />

        </div>
        <p id='about'>Whether you are an Enterprising Individual or Innovative Business, my personalised CFO service is a neat and affordable solution to help you <span id='big-text'>achieve your goals.</span><br></br><br></br>
          <span id='bold-text'>NAMBR</span> is a play on the word <span id='bold-text'>NUMBER</span>, but the letters are also my son&apos;s initials. Why am I telling you this?<br></br><br></br>  My approach is not just to focus on your immediate goals. Ultimately, my service is all about building for the future and I will help you achieve your long-term financial objectives. Together, we will help build you a sustainable and profitable business, or a sound and resilient investment portfolio, with the intention of building <span id='big-text'>long term wealth.</span>
          <br></br><br></br>I have a unique blend of expertise in finance, private equity and investments. I have provided development consultancy advice to a number of new start-up businesses including the setting up, structuring and raising of capital. When your business has reached the stage of needing a Chief Financial Officer, I can replicate that role either remotely or as a regular part of your team.
          I have a deep understanding of financial markets and a proven track record of identifying trends and opportunities that has been fruitful for me personally. I take an active and discretionary approach to portfolio construction.

        </p>
      </div>
    </div>
  )
}

export default About