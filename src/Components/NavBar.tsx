import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-scroll'

const NavBar = () => {

  return (
    <Navbar expand="md" className="navbar">
      <Container>
        <Nav className="nav ml-auto">
          <a className='nav-link' id='nambr' href='#'>NAMBR</a>
          <Link className='nav-link' activeClass='nav-active' to="about" spy={true} smooth={true} offset={-150} duration={600}>about</Link>
          <Link className='nav-link' activeClass='nav-active' to="services" spy={true} smooth={true} offset={-6} duration={600}>services</Link>
          <Link className='nav-link' activeClass='nav-active' to="contact" spy={true} smooth={true} offset={-100} duration={600}>contact</Link>
        </Nav>
      </Container>
    </Navbar >
  )
}

export default NavBar
