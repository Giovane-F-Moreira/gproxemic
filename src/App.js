import React from 'react';
import './App.css';

//Components
import Navbar from './components/Navbar';
import Logo from './components/LogoGproxemic';
import Automatic from './components/Automatic';
import Description from './components/Description';
import Token from './components/Token';
import Arquiteture from './components/Arquiteture';
import Footer from './components/Footer';
import Form from './components/Form';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Logo />
      </div>
      <br /><br /><br />
      <div className="row" >
        <div className="col-sm-6">                  
            <div id='mapid'></div>                          
        </div> 
        <div className="col-sm-5">
          <Automatic /> 
          <Description />
          <Token />
          <Form />
          <div className="row">
            <div className="col-3"></div>
            <div className="col-9">
              <p className='description'>
                Exemple Coordinates: <br/>
                New York('Office')= -73.989 , 40.733 <br/>
                Berkeley('Shop')= -122.2727469 , 37.8715926
              </p>
            </div>
          </div>
          
        </div>
        <div className="col-sm-1"></div></div><br /><br />

      <Arquiteture /><br /><br /><br />
      <Footer/>
    </>
  );
}

export default App;
