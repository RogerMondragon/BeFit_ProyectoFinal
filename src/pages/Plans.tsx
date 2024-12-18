// src/pages/Plans.tsx
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

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.text};
`;

const PlanCard = styled.div`
  background-color: rgba(0, 0, 0, 0.6); /* Fondo negro con 60% de opacidad */
  color: ${(props) => props.theme.colors.text};
  border: 1px solid #ccc;
  margin: 1rem auto;
  padding: 2rem;
  border-radius: 10px;
  width: 80%;
  max-width: 400px;
  text-align: center;
`;

const PlanTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.accent};
`;

const PlanDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 5.5rem;
`;

const PlanPrice = styled.p` 
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
`;

const BuyButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

const Plans: React.FC = () => {
  return (
    <Container>
      <Title>Planes de Entrenamiento</Title>
      <PlanCard>
        <PlanTitle>Básico</PlanTitle>
        <PlanDescription>Ideal para principiantes o personas que lleven poco.</PlanDescription>
        <PlanPrice>$120.000/mes</PlanPrice>
        <BuyButton>Comprar</BuyButton>
      </PlanCard>
      <PlanCard>
        <PlanTitle>Intermedio</PlanTitle>
        <PlanDescription>Para aquellos con 1-2 años de experiencia.</PlanDescription>
        <PlanPrice>$320.000/mes</PlanPrice>
        <BuyButton>Comprar</BuyButton>
      </PlanCard>
      <PlanCard>
        <PlanTitle>Avanzado</PlanTitle>
        <PlanDescription>Para los más experimentados.</PlanDescription>
        <PlanPrice>$480.000/mes</PlanPrice>
        <BuyButton>Comprar</BuyButton>
      </PlanCard>
    </Container>
  );
};

export default Plans;
