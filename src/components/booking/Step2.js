import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

const Step2 = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [timeOfDay, setTimeOfDay] = useState('morning');
    const [priceRange, setPriceRange] = useState([0, 1000]);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleTimeOfDayChange = (event) => {
        setTimeOfDay(event.target.value);
    };

    const handlePriceChange = (newValue) => {
        setPriceRange(newValue);
    };

    return (
        <Container>
            <Row className="d-flex justify-content-center text-center">
                <Col className='py-4'>
                    <div><span className="fs-2">Step navigation here</span></div>
                </Col>
            </Row>
            <Row className="mb-4 text-center">
                <Col>
                    <div><span className="fs-5">Filter and sort to find a talent.</span></div>
                </Col>
            </Row>
            <Row className="gap-md-5 d-flex justify-content-center">

            <Col md={4}>
                <div className="border rounded-1 px-4">
                    <div className="border-bottom py-4">
                        <h5 className="fs-5 mb-3">Date</h5>
                        <Row className="align-items-center">
                            <Col md={6} className="mb-md-0 mb-3">
                                <span>Select start date:</span>
                            </Col>
                            <Col md={6} className="mb-md-0 mb-3">
                                <span>Select start date:</span>
                            </Col>
                            <Col md={6} className="mb-md-0 mb-3">
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleStartDateChange}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    dateFormat="MMMM d, yyyy"
                                    placeholderText="Start Date"
                                    className="form-control"
                                />
                            </Col>
                            <Col md={6} className="mb-md-0 mb-3">
                                <DatePicker
                                    selected={endDate}
                                    onChange={handleEndDateChange}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    dateFormat="MMMM d, yyyy"
                                    placeholderText="End Date"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                    </div>

                    <div className="border-bottom py-4">
                        <h5 className="fs-5 mb-3">Time</h5>
                        <Row className="align-items-center">
                            <Col>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="morning"
                                        value="morning"
                                        checked={timeOfDay === 'morning'}
                                        onChange={handleTimeOfDayChange}
                                    />
                                    <label className="form-check-label" htmlFor="morning">
                                        Morning (8am - 12pm)
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="afternoon"
                                        value="afternoon"
                                        checked={timeOfDay === 'afternoon'}
                                        onChange={handleTimeOfDayChange}
                                    />
                                    <label className="form-check-label" htmlFor="afternoon">
                                        Afternoon (12pm - 5pm)
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        id="evening"
                                        value="evening"
                                        checked={timeOfDay === 'evening'}
                                        onChange={handleTimeOfDayChange}
                                    />
                                    <label className="form-check-label" htmlFor="evening">
                                        Evening (5pm - 9:30pm)
                                    </label>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="border-bottom py-4">
                        <h5 className="fs-5 mb-3">Price</h5>
                        <Row className="align-items-center">
                            <Col>
                                <Slider
                                    range
                                    min={0}
                                    max={2000}
                                    defaultValue={priceRange}
                                    onChange={handlePriceChange}
                                />
                                <div className="d-flex justify-content-between">
                                    <span>₱0</span>
                                    <span>₱2000</span>
                                </div>
                                <div className="text-center mt-3">
                                    Price Range: ₱{priceRange[0]} - ₱{priceRange[1]}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                </Col>

                <Col md={6}>
                    <Row>
                        <div className="border round-1">
                            dsds
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Step2;