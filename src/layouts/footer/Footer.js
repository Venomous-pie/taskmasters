import { Container, Row, Col, Form, ListGroup, Image } from "react-bootstrap";
import '../../index.css';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import Fb from '../../assets/icons/facebook.png'
import Tiktok from '../../assets/icons/tik-tok.png'
import LinkedIn from '../../assets/icons/linkedin.png'

const Footer = () => {
    const dateNow = new Date()
    return (
        <footer>
            <Container>
                <Row className="mt-4 pb-4 border-bottom">
                    <Col>
                        <span className="fs-4">Follow us!</span>
                        <div className="mt-3">
                        <Image src={Fb} alt='Facebook' className='me-3' style={{width: 30}}/>                    
                        <Image src={Tiktok} alt='Facebook' className='me-3' style={{width: 30}}/>
                        <Image src={LinkedIn} alt='Facebook' className='me-3' style={{width: 30}}/>
                        </div>
                    </Col>

                    <Col>
                        <span className="fs-5">Company</span>
                        <ListGroup className="gap-2 mt-3">
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/about" className=" text-decoration-none">About Us</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/services" className=" text-decoration-none">All Services</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/blog" className=" text-decoration-none">Blog</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/press" className=" text-decoration-none">Press</Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col>
                        <span className="fs-5">Quick Links</span>
                        <ListGroup variant="flush" className="gap-2 mt-3">
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/about" className=" text-decoration-none">Terms & Conditions</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/services" className=" text-decoration-none">Privacy Policy</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/blog" className=" text-decoration-none">Support</Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 p-0">
                                <Link to="/press" className=" text-decoration-none">FAQ</Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col>
                        <span className="fs-5">Subscribe</span>
                        <Form.Group controlId="subscriberEmail" className="mt-3">
                            <Form.Label>Subscribe to get latest news articles and resources.</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col lg={6} sm={12}>
                        <Link><Image src={logo} className="logo-size align-items-center" fluid/></Link>
                    </Col>
                    <Col lg={6} sm={12} className="text-end">
                        <span>&copy; {dateNow.getFullYear()} Taskmaster All Rights Reserved</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;

