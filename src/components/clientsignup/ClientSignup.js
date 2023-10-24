import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ClientSignup = (props) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmission = async (e) => {
    e.preventDefault();

    const objReq = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        FIRSTNAME: firstname,
        LASTNAME: lastname,
        EMAIL: email,
        PASSWORD: password,
      }),
    };

    try {
      setIsLoading(true);
      const serverResponse = await fetch('http://localhost:7001/api/client-signup', objReq);
      const fetchResult = await serverResponse.json();

      if (fetchResult.success) {
        console.log(fetchResult.message);
        navigate('/login');
      } else {
        setMessage(fetchResult.message);
      }
    } catch (err) {
      if (err instanceof SyntaxError) {
        console.error('JSON Parse Error:', err);
      } else {
        console.error('Fetch Error:', err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmission}>
      <div className='row gx-3'>
        <Form.Group className='col-md-6 mb-4' controlId="firstname">
          <Form.Label className='test'><small>First Name</small></Form.Label>
          <Form.Control
            className='shadow-none'
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='col-md-6 mb-4' controlId="lastname">
          <Form.Label><small>Last Name</small></Form.Label>
          <Form.Control
            className='shadow-none'
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Form.Group>
      </div>

      <Form.Group className='mb-4' controlId="email">
        <Form.Label><small>Email Address</small></Form.Label>
        <small className='m-auto'>{message}</small>
        <Form.Control
          className='shadow-none'
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mb-4' controlId="password">
        <Form.Label><small>Password</small></Form.Label>
        <Form.Control
          className='shadow-none'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mb-4'>
        <Form.Label><small>Confirm Password</small></Form.Label>
        <Form.Control
          className='shadow-none'
          type="password"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='mb-4'>
        <small className='d-flex gap-2'>
          <Form.Check type='checkbox'></Form.Check>
          <Form.Label>I agree to the <Link to-="" className='text-decoration-none'>Terms of Use</Link> & <Link to-="" className='text-decoration-none'>Privacy Policy.</Link></Form.Label>
        </small>
      </Form.Group>

      <Button type='submit' disabled={isLoading}>Sign up</Button>

    </Form>
  );
}

export default ClientSignup;

