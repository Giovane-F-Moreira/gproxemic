import React from 'react';
import '../App.css';

import arrowOne from '../img/scenery/arrow1.png';
import arrowTwo from '../img/scenery/arrow-2r.png';
import arrowTree from '../img/scenery/arow-3r.png';
import arrowFour from '../img/scenery/arrow4.png';
import arrowFive from '../img/scenery/arrow-5rrrr.png'; 
import arrowSix from '../img/scenery/arrow6.png';
import arrowSeven from '../img/scenery/arrow7.png';
import zoneProxemicOff from '../img/scenery/zone-proxemicOFF.png';
import rosLibOff from '../img/scenery/ROSLibJsOFF.png';
import sateliteOFF from '../img/scenery/sateliteOFF.png';
import powerOFF from '../img/scenery/powerOFF.png';
import matlabOFF from '../img/scenery/MatlabOFF.png';
import geolocationOFF from '../img/scenery/geolocationOFF.png';
import rosOFF from '../img/scenery/ROSOFF.png';
import robo from '../img/scenery/robo.png';
import shoe from '../img/scenery/shoe.svg';
import pessoa from '../img/scenery/pessoa.png';

export default function Arquiteture() {
  return ( 
    <>
      <div className="cenario">
      <div className="row">
          <div className="col-sm-2"> 
          </div>
          <div className="col-sm-1">                           
          </div>
          <div className="col-sm-1">
              {/* <!-- <span><b>Results:</b></span><p>Personal</p> --> */}
          </div>
          <div className="col-sm-1"> 
              <img id="step4" src={zoneProxemicOff} width="120" />
          </div>
          <div className="col-sm-2"> 
              <img src={arrowFour} width="120" />
          </div>
          <div className="col-sm-1"> 
              <img id="step5" src={rosLibOff} width="120" />
          </div>
          <div className="col-sm-2"> 
              {/* <!-- <span><b>Results:</b></span><p> /Proxemic</p><span> Personal</span> --> */}
          </div>
          <div className="col-sm-2"> 
          </div>
        </div>

        <div className="row">
            <div className="col-sm-2"> 
            </div>
            <div className="col-sm-1"> 
            </div>
            <div className="col-sm-1"> 
                <img src={arrowTree} width="120" />
            </div>
            <div className="col-sm-1">
            </div>
            <div className="col-sm-2"> 
            </div>
            <div className="col-sm-1">
            </div>
            <div className="col-sm-1"> 
                <img src={arrowFive} width="120" />
            </div>
            <div className="col-sm-1"> 
            </div>
            <div className="col-sm-2"> 
            </div>
        </div>

        <div className="row">
          <div className="col-sm-1"> 
          </div>
          <div className="col-sm-1">
              {/* <!--  <span><b>Results:</b></span><p>Office</p>    --> */}
          </div>
          <div className="col-sm-1">
              <img id="step3" src={sateliteOFF} width="100" />
          </div>
          <div className="col-sm-1"> 
          </div>
          <div className="col-sm-4">
            <img className="step9" src={powerOFF} width="80" /><br /> 
            <p className="connecting" >
                Connecting to rosbridge...
            </p><br />
            <h4 className="connected" >
                Connected
            </h4><br />
            <p className="error" >
                Connection did not start or failed
            </p><br />
            <p className="closed" >
                Connection closed.
            </p>  
          </div>
          <div className="col-sm-1"> 
          </div>
          <div className="col-sm-1"> 
              <img id="step6" src={matlabOFF} width="120" />
          </div>
          <div className="col-sm-1">
              {/* <!--  <span style="margin-top:30px;"><b>Results:</b></span><p>Algorithm: Social Navigation</p> --> */}
          </div>
          <div className="col-sm-1">
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2"> 
          </div>
          <div className="col-sm-1">   
          </div>
          <div className="col-sm-1">
              <img src={arrowTwo} width="120" /> 
          </div>
          <div className="col-sm-1">
          </div>
          <div className="col-sm-2"> 
          </div>
          <div className="col-sm-1">
          </div>
          <div className="col-sm-1"> 
              <img src={arrowSix} width="120" />
          </div>
          <div className="col-sm-1"> 
          </div>
          <div className="col-sm-2"> 
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2"> 
          </div>
          <div className="col-sm-1"> 
          </div>
          <div className="col-sm-1">
              {/* <!--  <span style="margin-top:30px;"><b>Results:</b></span><p> -73.989</p><p>40.733</p>  -->                             */}
          </div>
          <div className="col-sm-1"> 
              <img id="step2" src={geolocationOFF} width="100" />
          </div>
          <div className="col-sm-2">
          </div>
          <div className="col-sm-2"> 
              <img id="step7" src={rosOFF} width="120" />
          </div>

          <div className="col-sm-1"> 
              {/* <!--  <span style="margin-top:30px;"><b>Results:</b></span><p>Manipulates sensors and actuators to move the robot</p>  --> */}
          </div>
          <div className="col-sm-2"> 
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2"> 
          </div>
          <div className="col-sm-1">                                       
          </div>
          <div className="col-sm-1"> 
          </div>
          <div className="col-sm-1">

          </div>
          <div className="col-sm-2"> 
              <img src={arrowOne} width="120"/>
          </div>
          <div className="col-sm-1">
              <img src={arrowSeven} width="120"/>
          </div>
          <div className="col-sm-1"> 
          </div>
          <div className="col-sm-1"> 
          </div>
          <div className="col-sm-2"> 
          </div>
        </div>

        <div className="row">
          <div className="col-sm-5">   
          </div>                  
          <div className="col-sm-2">
              <img id="step1" src={robo} width="120"/>
          </div>
          <div className="col-sm-1">
              <img src={shoe} className='shoes' width="30"/>
          </div>
          <div className="col-sm-1">
              <img src={shoe} className='shoes' width="30" /> 
          </div>
          <div className="col-sm-1">
              <img id="step8" src={pessoa} width="200px;" /> 
          </div>
          <div className="col-sm-2"> 
          </div>
        </div>
      </div>
      
    </>
  );
}