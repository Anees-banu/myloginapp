import './register.css';
import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]     = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    fetch('http://localhost:8000/api/register/', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ username, email, password }),
    })
      .then(res => res.json().then(data => ({status: res.status, data })))
      .then(({status, data}) => {
        if (status === 201) navigate('/login');
        else setError(data.error || 'Registration failed');
      })
      .catch(() => setError('Network error'));
  };

  return (
    <Container className="form-container">
      <h2>Register</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group><Form.Label>Username</Form.Label>
        <Form.Control value={username} onChange={e=>setUsername(e.target.value)} /></Form.Group>

        <Form.Group><Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={e=>setEmail(e.target.value)} /></Form.Group>

        <Form.Group><Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={e=>setPassword(e.target.value)} /></Form.Group>

        <Button type="submit" className="btn-custom">Register</Button>
      </Form>
    </Container>
  );
}

export default Register; 