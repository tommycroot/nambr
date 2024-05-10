import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-scroll'

const NavBar = () => {

  return (

    <Navbar expand="md" className="navbar">
      <Container>
          <Nav className="nav ml-auto">
          <Link className='nav-link' activeClass='nav-active' id='nambr' to="about" spy={true} smooth={true} offset={-100} duration={600}>NAMBR</Link>
            <Link className='nav-link' activeClass='nav-active' to="about" spy={true} smooth={true} offset={-100} duration={600}>about</Link>
            <Link className='nav-link' activeClass='nav-active' to="services" spy={true} smooth={true} offset={-100} duration={600}>services</Link>
            <Link className='nav-link' activeClass='nav-active' to="wave-point" spy={true} smooth={true} offset={-390 + 45} duration={600}>contact</Link>

          </Nav>
      </Container>
    </Navbar >
  )
}

export default NavBar