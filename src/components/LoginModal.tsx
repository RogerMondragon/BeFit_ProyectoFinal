import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import Modal from './Modal';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 5px;
  font-size: 1rem;
  background: ${(props) => props.theme.colors.inputBackground};
  color: ${(props) => props.theme.colors.inputText}; /* Asegurarse de que el color del texto sea visible */

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    outline: none;
  }
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
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

const LoginModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Error logging in user');
      }
      Swal.fire('¡Inicio de sesión exitoso!', result.message, 'success');
      localStorage.setItem('username', result.username);
      window.location.href = '/';
    } catch (error) {
      console.error('Error during login:', error);
      Swal.fire('Error', error instanceof Error ? error.message : 'No se pudo conectar con el servidor', 'error');
    }
  };

  return (
    <Modal onClose={onClose}>
      <h2>Inicio de Sesión</h2>
      <Form onSubmit={handleLogin}>
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
        <Button type="submit">Login</Button>
      </Form>
    </Modal>
  );
};

export default LoginModal;
