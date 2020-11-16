import React, { useEffect } from 'react';
import './index'

// Components
import { NavBar } from './Components/Navbar/Navbar';

// Containers
import Home from './Containers/HomeContainer';

// Styles 
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
        <Home/>
      </section>
    </div>

  )
}

export default App;