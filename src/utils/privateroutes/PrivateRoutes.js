import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {

    const isLoginSuccess = !!localStorage.getItem('token');
    
    return(
        isLoginSuccess ? <Outlet/> : <Navigate to ="/login"/>
    )
}

export default PrivateRoutes;