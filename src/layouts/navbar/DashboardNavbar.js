import { Nav, Navbar, Container, Image, NavbarBrand, NavDropdown } from 'react-bootstrap'
import logo from '../../assets/images/logo.png'
import User from '../../assets/icons/user.png'
import { Link } from 'react-router-dom';

const DashboardNavbar = ( { isClient, handleLogoutClick } ) => {

    return (
        <Container fluid>
        <Navbar expand="lg" className="test bg-body-tertiary" style={{ minHeight: "64px" }}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <Image src={logo} style={{ width: 180 }} fluid></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto d-flex gap-md-5">
                        {isClient() ? <Nav.Link as={Link} to="/">Find a talent</Nav.Link>
                            : <Nav.Link as={Link} to="/">Find a job</Nav.Link>}
                        <Nav.Link as={Link} to="/services">Locations</Nav.Link>
                        <Nav.Link as={Link} to="/services">Help</Nav.Link>
                    </Nav>

                    <Nav className='mx-5'>
                        <NavDropdown title={                          
                            <Image src={User} style={{ width: 20 }} title='Profile' fluid rounded />                     
                        } menuVariant='success'>                  
                            <NavDropdown.Item as={Link} to='/dashboard/profile'>Account</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/dashboard/profile'>Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleLogoutClick}>Log-out</NavDropdown.Item>
                        </NavDropdown> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Container>
    )
}

export default DashboardNavbar;