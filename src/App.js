import React, { useEffect } from 'react';
import './index'

// Components
import { NavBar } from './Components/Navbar/Navbar';

// Containers
import Home from './Containers/HomeContainer';

// JS 
import M from 'materialize-css';



function App() {

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <section>
        <Home greeting='¡Hola! Pronto vamos a abrir nuestra tienda online. ¡Volvé en unos días!' />
      </section>
    </div>

  )
}

export default App;