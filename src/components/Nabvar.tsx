// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

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

const Button = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const LogoutButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

const Navbar: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername(null);
    navigate('/login');
  };

  return (
    <Nav>
      <Ul>
        <Li><A to="/">BeFit</A></Li>
        <Li><A to="/">Inicio</A></Li>
        <Li><A to="/plans">Planes de entrenamiento</A></Li>
        <Li><A to="/tips">Tips de entrenamiento</A></Li>
        <Li><A to="/supplements">Suplementos</A></Li>
        <Li><A to="/contact">Contacto</A></Li>
        {!username && <Li><Button onClick={() => setIsLoginModalOpen(true)}>Inicio de Sesión</Button></Li>}
        {!username && <Li><Button onClick={() => setIsRegisterModalOpen(true)}>Registro</Button></Li>}
        {username && (
          <>
            <Li>Bienvenido, {username}!</Li>
            <Li><LogoutButton onClick={handleLogout}>Cerrar Sesión</LogoutButton></Li>
          </>
        )}
      </Ul>

      {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />}
      {isRegisterModalOpen && <RegisterModal onClose={() => setIsRegisterModalOpen(false)} />}
    </Nav>
  );
};

export default Navbar;
