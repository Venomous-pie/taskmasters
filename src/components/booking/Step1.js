import { Container, Row, Col, Card, InputGroup, FormControl, Button, Form } from "react-bootstrap";
import { StyledInputGroup, StyledFormControl } from "../styles/InputGroup.style";

const Step1 = ({ onNext }) => {

    const handleNext = () => {
        onNext();
    }

    return (
        <Container className="">

            <Row className="d-flex justify-content-center text-center">
                <Col className='py-4'>
                    <div><span className="fs-2">Step navigation here</span></div>
                </Col>
            </Row>
            <Row className="mb-4 text-center">
                <Col>
                    <div><span className="fs-5">Tell us about your task.</span></div>
                </Col>
            </Row>

            <Row className="d-flex justify-content-center">

            <Form className="col-md-10">

                <Row className="d-flex justify-content-center mb-4">
                    <Col md={9}>
                        <div><span className="fs-3">Graphic Design</span></div>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center mb-4">
                    <Col md={4}>
                        <Form.Group>
                            <Form.Control as="select" className="rounded-1 shadow-none w-100 p-3">
                                <option value="">Anywhere</option>
                                <option value="city1">Baguio City</option>
                                <option value="city2">Cagayan de Oro City</option>
                                <option value="city3">Cebu City</option>
                                <option value="city4">Davao City</option>
                                <option value="city5">Makati City</option>
                                <option value="city6">Mandaue City</option>
                                <option value="city7">Manila</option>
                                <option value="city8">Surigao City</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col md={5}>
                        <InputGroup>
                            <FormControl
                                type="text"
                                placeholder='Street Address'
                                className="rounded-1 shadow-none w-100 p-3"
                            />
                        </InputGroup>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center mb-4">
                    <Col md={9}>
                        <Form.Group className="radio border rounded-1 px-3 py-4">
                            <Form.Label>How big is the task?</Form.Label>
                            <div className="d-flex align-items-center justify-content-between w-100 mt-4 px-5">
                                <Form.Check type="radio" name="option" value="option1" label="Small - Est. 1-2 hrs" />
                                <Form.Check type="radio" name="option" value="option2" label="Medium - Est. 3-4 hrs" />
                                <Form.Check type="radio" name="option" value="option3" label="Large - Est. 5+ hrs" />
                            </div>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center mb-4">
                    <Col md={9}>
                        <InputGroup>
                            <FormControl
                                as="textarea"
                                aria-label="With textarea"
                                placeholder='Describe your task...'
                                className="rounded-1 shadow-none w-100 p-3"
                                style={{ minHeight: "200px" }}
                            />
                        </InputGroup>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center mb-4">
                    <Col md={9} className="text-end">
                        <Button onClick={handleNext} className="col-md-2" variant="primary" type="submit">Next</Button>
                    </Col>
                </Row>
            </Form>
            </Row>

        </Container>
    )

}

export default Step1;