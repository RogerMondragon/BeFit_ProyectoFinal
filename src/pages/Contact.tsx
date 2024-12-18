// src/pages/Contact.tsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.text}; /* Color blanco */
`;

const ContactCard = styled.div`
  background-color: rgba(0, 0, 0, 0.6); /* Fondo negro con 60% de opacidad */
  color: ${(props) => props.theme.colors.text};
  border: 1px solid #ccc;
  margin: 1rem auto;
  padding: 2rem;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  text-align: left;
`;

const ContactDetail = styled.p`
  font-size: 3.2rem;
  margin-bottom: 1rem;
`;

const Contact: React.FC = () => {
  return (
    <Container>
      <Title>Contacto</Title>
      <ContactCard>
        <ContactDetail>Email: djrogerm1052@gmail.com</ContactDetail>
        <ContactDetail>WhatsApp: +57 3192512050</ContactDetail>
      </ContactCard>
    </Container>
  );
};

export default Contact;
