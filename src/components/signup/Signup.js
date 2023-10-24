import React, { useState } from 'react';
import { Card, Button, Container, Modal } from 'react-bootstrap';
import ClientSignup from '../clientsignup/ClientSignup';
import FreelancerSignup from '../freelancersignup/FreelancerSignup';
import { Link } from 'react-router-dom';

function Signup() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleSignupButton = () => {
        setShowSignupModal(true);
    };

    const handleCloseModal = () => {
        setShowSignupModal(false);
        setSelectedOption(null);
    };

    return (
        <Container className="text-center vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100 py-5 d-flex align-items-center justify-content-center">
                <div className="col-md-12 h-100 align-items-center">


                    <div className='text-center mb-5'>
                        <img
                            src='your_logo_url_here'
                            alt='Logo'
                        />

                    </div>

                    <div className="col-md-12">
                        <h2>Sign Up as a <strong>Client</strong> or <strong>Freelancer</strong></h2>
                    </div>

                    <div className="row d-flex align-items-center justify-content-center px-2 mt-4 mt-md-5 gy-3">
                        <Card
                            className={`col-md-3  mx-4 mb-3 ${selectedOption === 'client' ? 'bg-info' : ''}`}
                            style={{ minHeight: '20vh' }}
                            onClick={() => handleOptionSelect('client')}
                        >
                            <Card.Body className='d-flex flex-column align-items-center justify-content-center'>

                                <Card.Title><h4>Client</h4></Card.Title>
                                <Card.Text>I need a freelancer.</Card.Text>

                            </Card.Body>
                        </Card>

                        <Card
                            className={`col-md-3 mx-4 mb-3 ${selectedOption === 'freelancer' ? 'bg-info' : ''}`}
                            style={{ minHeight: '20vh' }}
                            onClick={() => handleOptionSelect('freelancer')}
                        >
                            <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
                                <Card.Title><h4>Freelancer</h4></Card.Title>
                                <Card.Text>I'm looking for work.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <Button
                        className="col-12 col-md-4 col-lg-3 py-2 mt-4 mt-md-5"
                        variant="primary" onClick={handleSignupButton}
                        disabled={!selectedOption}
                        style={{ fontSize: '15px', borderRadius: '20px' }}>
                        {selectedOption ? (
                            selectedOption === 'client' ? 'Sign Up as a Client' : 'Sign Up as a Freelancer'
                        ) :
                            (
                                'Create Account'

                            )}
                    </Button>

                    <div className='mt-4'>
                        <span style={{fontSize: '15px'}}>
                           
                            Already have an account?  
                            <Link to="/login" className="text-decoration-none ms-2">Log in</Link>
                          
                        </span>

                    </div>

                </div>
            </div>

            <Modal 
            show={showSignupModal} 
            onHide={handleCloseModal} 
            
            aria-labelledby="contained-modal-title-vcenter" 
            centered
            >
               
                <Modal.Header closeButton className='px-4 px-md-5 py-md-3' style={{ border: 'none' }}>
                    <Modal.Title>
                        Signup as a {selectedOption === 'client' ? 'Client' : 'Freelancer'}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='p-4 px-md-5'>
                    {
                        selectedOption === 'client' ? (<ClientSignup />) : (<FreelancerSignup/>)
                    }
                </Modal.Body>
              
            </Modal>
            
        </Container>
    );

}

export default Signup;
