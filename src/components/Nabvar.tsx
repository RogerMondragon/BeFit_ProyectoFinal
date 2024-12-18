// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 1rem;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
`;

const Li = styled.li`
  margin: 0 1rem;
`;

const A = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Ul>
        <Li><A to="/">Inicio</A></Li>
        <Li><A to="/plans">Planes de entrenamiento</A></Li>
        <Li><A to="/tips">Tips de entrenamiento</A></Li>
        <Li><A to="/supplements">Suplementos</A></Li>
        <Li><A to="/contact">Contacto</A></Li>
        <Li><A to="/login">Inicio de Sesión</A></Li>
        <Li><A to="/register">Registro</A></Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
