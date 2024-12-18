// src/pages/Tips.tsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 0vh
`;

const ContentBox = styled.div` 
background-color: rgba(0, 0, 0, 0.6); /* Fondo negro con 60% de opacidad */
padding: 2rem;
border-radius: 10px;
color: ${(props) => props.theme.colors.text};
max-width: 600px;
width: 100%; `;


const Tips: React.FC = () => {
  return (
    <Container>
        <ContentBox>
      <h1>Tips de Entrenamiento</h1>
      <h2>Ejecutar los ejercicios con la técnica correcta el lo primordial para maximizar tus entrenamientos.</h2>
      <img src="https://okdiario.com/img/vida-sana/2015/11/press_banca-Pies-abajo_04.jpg" alt="pecho" className="PressBanca"></img>
      <h3>En el Press de Banco Plano, lo primero que tienes que saber es, que la barra tiene unas zonas donde te marca desde donde deberias de atomar el agarre, esto es para asegurarnos
        que estamos cogiendo la barra del centro, y lo segundo mas importante es que una vez estes ejecutando el ejercicio te lleves la barra abajo de tu zona pectoral
      </h3>
      <img src="https://hips.hearstapps.com/hmg-prod/images/woman-exercising-with-weights-in-gym-royalty-free-image-1667479120.jpg?crop=1.00xw:0.849xh;0,0.151xh&resize=2048:*" alt="sentadillamujer" className="sentadilla"></img>
      <h3>En la Sentadilla con Barra Libre, debes de posicionarte con tus piernas ligeramente mas ancho que tus hombros, la barra debe de ir un poco mas abajo del cuello y lo mas
        importante es que bajes hasta que tus pantorrilas toquen la zona de atras de las piernas, asi como se ve reflejado en la imagen
        </h3>
        <img src="https://i.blogs.es/c417f2/1366_2000/650_1200.webp" alt="pesomuertohombre" className="pesomuerto"></img>
        <h3>El Peso Muerto es quiza una de los ejercicios mas dificiles de ejecutar para las personas que apenas estan iniciando en el gimnasio, para poder ejecutar correctamente este
            ejercicio debes agarrar la barra un poco mas ancho que tus hombros y al momento de bajar debes de tirar los gluteos hacia atras, para compenzar el peso en todo el cuerpo y que
            los lumbares no se lleven todo el trabajo porque de lo contrario tendremos dolor en la espalda baja de una mala ejecución
        </h3>
      </ContentBox>
    </Container>
  );
};

export default Tips;
