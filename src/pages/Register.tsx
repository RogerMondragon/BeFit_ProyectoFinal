// src/pages/Register.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const FormBox = styled.div`
  background-color: rgba(0, 0, 0, 0.6); /* Fondo negro con 60% de opacidad */
  padding: 5rem;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.text};
  max-width: 500px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin: 1rem 0;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();
    if (!response.ok) {
      Swal.fire('Error', result.message, 'error');
    } else {
      Swal.fire('¡Registro exitoso!', result.message, 'success');
    }
  };

  return (
    <Container>
      <FormBox>
        <h2>Registro</h2>
        <form onSubmit={handleRegister}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Button type="submit">Register</Button>
        </form>
      </FormBox>
    </Container>
  );
};

export default Register;
