import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Step1 from "./Step1"
import Step2 from "./Step2";
import { Container } from "react-bootstrap"
import Home from "../home/Home";

const Booking = () => {
    const [ step,  setStep ] = useState(1);


    const  handleNextStep = () => {
        setStep(step + 1);
    }

    const  handlePreviousStep = () => {
        setStep(step + 1);
    }

    return (
        <Container>
            {step === 1 && (
                <Step1 onNext={handleNextStep}/>
            )}
            {step === 2 && (
                <Step2 onPrevious={handlePreviousStep}/>
            )}
                   
        </Container>
    )
}

export default Booking;

