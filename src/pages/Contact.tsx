import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.text};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 5px;
  font-size: 1rem;
  background: ${(props) => props.theme.colors.inputBackground}; // Fondo blanco
  color: ${(props) => props.theme.colors.inputText}; // Texto negro

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 5px;
  font-size: 1rem;
  background: ${(props) => props.theme.colors.inputBackground}; // Fondo blanco
  color: ${(props) => props.theme.colors.inputText}; // Texto negro

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 400px;
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

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contactData = { name, email, message };
    // Guardar en cookies
    document.cookie = `contactData=${JSON.stringify(contactData)}; path=/;`;
    // Mostrar ventana emergente de SweetAlert
    Swal.fire('¡Mensaje enviado!', 'Tu mensaje ha sido guardado en las cookies.', 'success');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container>
      <Title>Contacto</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          required
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mensaje"
          rows={5}
          required
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};

export default Contact;
