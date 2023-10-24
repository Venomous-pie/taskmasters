import './Home.css';
import { Badge, Card, Image, Container, Row, Col, ListGroup, Stack, InputGroup, FormControl, Modal, Button } from "react-bootstrap";
import WebD from '../../assets/icons/web-design.png';
import Photo from '../../assets/icons/photo.png';
import Writing from '../../assets/icons/writing.png';
import Marketing from '../../assets/icons/marketing.png';
import Film from '../../assets/icons/film.png';
import Music from '../../assets/icons/music.png';
import Computer from '../../assets/icons/programming.png';
import More from '../../assets/icons/more.png';
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ServicesData } from '../../data/ServicesData';

const Home = () => {
    const [serviceItem, setServiceItem] = useState('')
    const [searchService, setSearchService] = useState('');
    const [selectedService, setSelectedService] = useState(null);
    const [isTouched, setIsTouched] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleTouchStart = () => {
        setIsTouched(true);
    };

    const handleTouchCancel = () => {
        setIsTouched(false);
    };

    const handleServiceClick = (service) => {
        navigate('/book', { selectedService: service });
    };

    useEffect(() => {
        const serviceTitles = ['Graphics Design', 'Web Development', 'Content Writing', 'Digital Marketing', 'Video Editing', 'UI/UX Design', 'Virtual Assistance'];
        setServiceItem(serviceTitles[0])
        let currentIndex = 0;

        const interval = setInterval(() => {
            setServiceItem(serviceTitles[currentIndex]);
            currentIndex = (currentIndex + 1) % serviceTitles.length;
        }, 1500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const serviceList = ['Erands', 'Home Repair', 'Landscaping', 'Plumbing', 'Electrical'];

    return (
        <section>
            <Container fluid className="img-fluid p-0 position-relative vh-50">
                <Row className='resize-container'> 
                    <Col className='fit-content image-banner'>
                        <Card className="card-center text-center transpo-bg">
                            <Card.Body>
                                <Card.Title className='fs-4 mb-2'>Get anything done from</Card.Title>

                                <Card.Text className='fs-4 mb-5'>{serviceItem}</Card.Text>
                                <div>
                                    <InputGroup>
                                        <FormControl
                                            placeholder='Find services...'
                                            className="rounded-1 col-6 px-4 fs-6"
                                            value={searchService}
                                            onChange={(e) => setSearchService(e.target.value)}
                                            onFocus={handleTouchStart}
                                            onBlur={handleTouchCancel}
                                        >
                                        </FormControl>
                                    </InputGroup>

                                    {isTouched &&
                                        <ListGroup className="rounded-1 border-none position-absolute col-12 mt-1" style={{ maxHeight: '25vh', overflowY: 'auto', cursor:'pointer' }}>
                                            {ServicesData.filter((item) => {
                                                return searchService.toLowerCase() === '' ? '' : item.name.toLowerCase().includes(searchService.toLowerCase());
                                            }).map((item) => (
                                                <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-start border-0 list-group-item-action px-4" onClick={() => handleServiceClick(item)}>
                                                        {item.name}
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    }
                                </div>

                                    <div className='scrollable-section'>
                                    <Stack direction="horizontal" gap={3} className="mt-3 justify-content-center">
                                        <Badge as={Link} bg="success" to='/services' className='text-decoration-none rounded-1 badge '>All</Badge>
                                        <Badge as={Link} bg="success" to='/services' className='text-decoration-none rounded-1 badge'>SEO Audits</Badge>
                                        <Badge as={Link} bg="success" to='/services' className='text-decoration-none rounded-1 badge'>Copywriting</Badge>
                                        <Badge as={Link} bg="success" to='/services' className='text-decoration-none rounded-1 badge'>Website Design</Badge>
                                        <Badge as={Link} bg="success" to='/services' className='text-decoration-none rounded-1 badge'>Data Entry</Badge>
                                    </Stack>
                                    </div>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="my-5">
                <p className='fs-4'>What you need, is what you get</p>
                <span>
                    Need help with something?
                    <Link to='/services' className='fs-10 text-decoration-none'> Post a job request</Link>
                </span>
                <Row className="my-auto services">
                    <Col lg={3} xs={6} md={4} className="my-3 mb-2">
                        <figure className='text-center pb-3'>
                            <Image src={WebD} alt="Image" className="mt-4 image-size-medium" fluid rounded />
                            <figcaption className='mt-2'>Graphics and Designs</figcaption>
                        </figure>
                    </Col>

                    <Col lg={3} xs={6} md={4} className="my-3 mb-2">
                        <figure className='text-center pb-3'>
                            <Image src={Photo} alt="Image" className="mt-4 image-size-medium" fluid rounded />
                            <figcaption className='mt-2'>Photography</figcaption>
                        </figure>
                    </Col>

                    <Col lg={3} xs={6} md={4} className="my-3 mb-2">
                        <figure className='text-center pb-3'>
                            <Image src={Writing} alt="Image" className="mt-4 image-size-medium" fluid rounded />
                            <figcaption className='mt-2'>Writing and Translation</figcaption>
                        </figure>
                    </Col>

                    <Col lg={3} xs={6} md={4} className="my-3 mb-2">
                        <figure className='text-center pb-3'>
                            <Image src={Marketing} alt="Image" className="mt-4 image-size-medium" fluid rounded />
                            <figcaption className='mt-2'>Digital Marketing</figcaption>
                        </figure>
                    </Col>

                    <Col lg={3} xs={6} md={4} className="my-3 mb-2">
                        <figure className='text-center pb-3'>
                            <Image src={Film} alt="Image" className="mt-4 image-size-medium" fluid rounded />
                            <figcaption className='mt-2'>Video Editing</figcaption>
                        </figure>
                    </Col>

                    <Col lg={3} xs={6} md={4} className="my-3 mb-2">
                        <figure className='text-center pb-3'>
                            <Image src={Music} alt="Image" className="mt-4 image-size-medium" fluid rounded />
                            <figcaption className='mt-2'>Music and Audio</figcaption>
                        </figure>
                    </Col>

                    <Col lg={3} xs={6} md={4} className="my-3 mb-2">
                        <figure className='text-center pb-3'>
                            <Image src={Computer} alt="Image" className="mt-4 image-size-medium" fluid rounded />
                            <figcaption className='mt-2'>Programming & Tech</figcaption>
                        </figure>
                    </Col>

                    <Col lg={3} xs={6} md={4} className="my-3 mb-2 text-decoration-none text-dark" as={Link} to="/services">
                        <figure className='text-center pb-3'>
                            <Image src={More} alt="Image" className="mt-4 image-size-medium" fluid rounded />
                            <figcaption className='mt-2'>Other</figcaption>
                        </figure>
                    </Col>
                </Row>
            </Container>

            {/* {location.path="/" ? 
            <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div> : ''} */}
        </section>
    );
}

export default Home;