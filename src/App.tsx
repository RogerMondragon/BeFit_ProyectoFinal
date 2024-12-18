// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Nabvar';
import Home from './pages/Home';
import Plans from './pages/Plans';
import Tips from './pages/Tips';
import Supplements from './pages/Supplements';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import { theme } from './theme';
import GlobalStyle from './globalStyles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/supplements" element={<Supplements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
