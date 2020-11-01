// Todo lo que es contenedor tiene la lógica y retorna el componente.
import React from 'react';
import Home from '../Components/Home/Home'

const HomeContainer = ({greeting}) => { 
   return (
        <Home greeting={greeting}/>
   ) 
  } 
  
  export default HomeContainer;