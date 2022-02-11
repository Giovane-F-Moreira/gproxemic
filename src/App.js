import React from 'react';
import Navbar from './components/Navbar';
import Logo from './components/LogoGproxemic';
import Automatic from './components/Automatic';
import Input from './components/Input';
import Description from './components/Description';
import Token from './components/Token';
import ButtonSearch from './components/ButtonSearch';
import Arquiteture from './components/Arquiteture';

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
          <Input placeholder='Longitude' />
          <Input placeholder='Latitude' /> <br />
          <div className="row">
            <div className="col-5"></div>
            <div className="col-2"><ButtonSearch /></div>      
          </div><br />
          <div className="row">
            <div className="col-3"></div>
            <div className="col-9">
              <span>Exemple Coordinates: </span><br />
              <span>New York('Office')= -73.989 , 40.733</span><br />
              <span>Berkeley('Shop')= -122.2727469 , 37.8715926</span>
            </div>
          </div>
          
        </div>
        <div className="col-sm-1"></div>

      </div>
      {/* <Arquiteture /> */}
      <br /><br /><br />
    </>
  );
}

export default App;
