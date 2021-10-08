import React, {Component} from 'react';
import Banner from './layout/Banner';
import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer';

class App extends Component
{
  render()
  {
    const temas = 
    [
      "Tipos de componentes ",
      "Contenedores",
      "Usar más de un componente",
      "Funciones",
      "Props",
      "PropTypes",
      "DefaultProps"
    ]
    return(
      <div>
        <Banner/>
        <Header/>
        <Banner texto = "08/OCT/2021"/>
        <Body practica = "Práctica 2 - Unidad 1" temas = {temas}/>
        <Footer pie = {<p>Copyright © Todos los derechos reservados</p>}/>
      </div>
    )
  }
}

export default App;
