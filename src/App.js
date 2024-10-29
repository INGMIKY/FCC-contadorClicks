import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import Boton from './Components/Boton';
import "./styles/Boton.css"
import Contador from './Components/Contador';
import { useState } from 'react';


function App() {

  const [numClick, setNumClick] = useState(0);

  const manejarClick = () =>{
    setNumClick(numClick + 1);
  };

  const reiniciarContador = () =>{
    setNumClick(0);
  };  

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='Logo de freeCodeCamp'/> 
      </div>
       <div className='contenedor-contador'>
          <Contador numClicks={numClick}/>
          <Boton texto="Click" esBotonDeClick={true} manejarClick={manejarClick} />
          <Boton texto="Reiniciar" esBotonDeClick={false} manejarClick={reiniciarContador} />
       </div>
    </div>
  );
}

export default App;
