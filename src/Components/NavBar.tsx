import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [offsets, setOffsets] = useState({
    about: -480,
    services: 60,
    contact: 0
  });

  const updateOffsets = () => {
    if (window.innerWidth <= 767) {
      setOffsets({
        about: -380,  
        services: -50,  
        contact: -50
      });
    } else {
      setOffsets({
        about: -530,
        services: -90,
        contact: -90
      });
    }
  };

  useEffect(() => {
    updateOffsets();
    window.addEventListener('resize', updateOffsets);
    return () => window.removeEventListener('resize', updateOffsets);
  }, []);

  return (
    <Navbar expand="md" className="navbar">
      <Container>
        <Nav className="nav ml-auto">
          <a className='nav-link' id='nambr' href='#'>NAMBR</a>
          <Link className='nav-link' activeClass='nav-active' to="about" spy={true} smooth={true} offset={offsets.about} duration={600}>about</Link>
          <Link className='nav-link' activeClass='nav-active' to="services" spy={true} smooth={true} offset={offsets.services} duration={600}>services</Link>
          <Link className='nav-link' activeClass='nav-active' to="contact" spy={true} smooth={true} offset={offsets.contact} duration={600}>contact</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
