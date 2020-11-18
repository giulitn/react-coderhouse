import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <div>
        <header>
          <NavBar/>
        </header>
        <Switch>
          <Route exact path='/' >
            <Home/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;