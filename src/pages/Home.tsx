// src/pages/Home.tsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 0vh;
`;

const ContentBox = styled.div` 
background-color: rgba(0, 0, 0, 0.6); /* Fondo negro con 60% de opacidad */
padding: 2rem;
border-radius: 10px;
color: ${(props) => props.theme.colors.text};
max-width: 600px;
width: 100%; `;

const Home: React.FC = () => {
  return (
    <Container>
    <ContentBox>
      <h1>¡BIENVENIDO!</h1>
      <h2>CON NOSOTROS VERAS TU MEJOR VERSION</h2>
      <h3>Aqui encontraras planes de entrenamiento, tips y suplementos para ayudarte a alcanzar verdaderos resultados.</h3>
      <img src="/src/assets/culturista1.png" alt="imagenculturista" className="culturista1"></img>
    </ContentBox>
    </Container>
  );
};

export default Home;
