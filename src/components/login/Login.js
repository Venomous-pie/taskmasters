import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import './Login.module.css';
import logo from '../../assets/images/logo.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:7001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(data.message);
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('userData', JSON.stringify(data.user));
        navigate('/dashboard');
      } else {
        setMessage(data.message);
      }

    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className='vh-100 d-flex justify-content-center align-items-center'>
      <div className='col-md-3'>
        <div className='text-black'>
          <div className='py-md-4 mx-md-4'>
            <div className='text-center mb-5'>
              <Link to='/'>
                <Image
                  src={logo}
                  alt='Logo'
                  style={{ width: 200 }}
                  fluid
                />
              </Link>
            </div>
            <Form onSubmit={login}>
              <Form.Group className='mb-3' controlId='email'>
                <Form.Label><small>Email Address</small></Form.Label>
                <Form.Control className='shadow-none' type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group className='mb-4' controlId='password'>
                <Form.Label><small>Password</small></Form.Label>
                <Form.Control className='shadow-none' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <div className='loginMessage mb-3'>{message}</div>
              <Button className='gradient-btn mb-2 w-100' type='submit' disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Log in'}
              </Button>
              <div className='text-center mb-4'>
                <Link to='/password/reset' className='text-decoration-none fs-10'>Forgot password?</Link>
              </div>
              <div className='text-center mb-2'>
                <span className="text-decoration-none">
                  Don't have an account?
                  <Link to="/signup" className="text-decoration-none ms-2">Sign up</Link>
                </span>
              </div>
            </Form>
          </div >
        </div >
      </div >

    </section >
  );
};

export default Login;
