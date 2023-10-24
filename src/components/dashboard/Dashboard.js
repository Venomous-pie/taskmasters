import { Nav, Navbar, Container, Image, NavbarBrand, NavDropdown } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import DashboardNavbar from '../../layouts/navbar/DashboardNavbar';

const Dashboard = ({ handleLogout }) => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        handleLogout();
        navigate('/login');
    }

    const isClient = () => {
        return userData && userData.role === 'client';
    }

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) { 
            setUserData(JSON.parse(storedUserData));
        };
    }, []);

    return (
        <DashboardNavbar handleLogoutClick={handleLogoutClick} isClient={isClient}/>



    )
}

export default Dashboard;

