// src/globalStyles.ts
import { createGlobalStyle } from 'styled-components';
import backgroundImage from './assets/gimnasio5.jpg'; // Asegúrate de tener una imagen de fondo en tu carpeta de assets

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: cover;
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.colors.text};
  }

  nav {
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 1rem;
  }

  nav ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
  }

  nav ul li {
    margin: 0 1rem;
  }

  nav ul li a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    font-weight: bold;
  }

  .culturista1 {
    position: absolute;
    left: 280px;
    right: 50px;
    top: 280px;
    transform: translate(-100);
    width: 100%;
  }

  .PressBanca {
  width: 600px; 
  height: 300px; 
  object-fit: cover; 
  border-radius: 15px; 
  border: 2px solid #ccc; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); 
  }

  .sentadilla {
  width: 600px; 
  height: 300px; 
  object-fit: cover; 
  border-radius: 15px;  
  border: 2px solid #ccc; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); 
  }

  .pesomuerto {
  width: 600px; 
  height: 300px; 
  object-fit: cover; 
  border-radius: 15px;  
  border: 2px solid #ccc; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }

  .creatina {
  width: 300px;
  height: 300px; 
  object-fit: cover; 
  border-radius: 15px;  
  border: 2px solid #ccc; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }

  .proteina {
  width: 300px; 
  height: 300px; 
  object-fit: cover; 
  border-radius: 15px;  
  border: 2px solid #ccc; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }

  .bcaas {
  width: 300px; 
  height: 300px; 
  object-fit: cover; 
  border-radius: 15px;  
  border: 2px solid #ccc; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }

  .omega3 {
  width: 300px; 
  height: 300px; 
  object-fit: cover; 
  border-radius: 15px;  
  border: 2px solid #ccc; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }

  .glutamina {
  width: 300px; 
  height: 300px; 
  object-fit: cover; 
  border-radius: 15px;  
  border: 2px solid #ccc; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }

  .preentreno {
  width: 300px; 
  height: 300px; 
  object-fit: cover;
  border-radius: 15px;  
  border: 2px solid #ccc; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

export default GlobalStyle;
