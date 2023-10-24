import { Nav, Navbar, Container, Image } from 'react-bootstrap'
import '../../index.css';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const LandingNavbar = () => {

    return (
        <div className="LandingNavbar">
            <Navbar expand="lg" className="test bg-body-tertiary" style={{ minHeight: "64px" }}>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <Image src={logo} className='logo-size' fluid/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto d-flex gap-md-5">
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/services">Help</Nav.Link>
                        </Nav>
                        <Nav className='gap-md-1'>
                            <Nav.Link as={Link} to="/login" className='px-auto'>Login</Nav.Link>
                            <Nav.Link as={Link} to="/signup" className='rounded-1 px-auto'>Sign up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default LandingNavbar;