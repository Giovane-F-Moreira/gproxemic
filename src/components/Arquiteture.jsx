// import React from 'react';
// import ArrowOne from '../img/scenery/arrow1.png';
// import ArrowTwo from '../img/scenery/arrow-2r.png';
// import ArrowTree from '../img/scenery/arow-3r.png';
// import ArrowFour from '../img/scenery/arrow4.png';
// import ArrowFive from '../img/scenery/arrow-5rrrr.png'; 
// import ArrowSix from '../img/scenery/arrow6.png';
// import ArrowSeven from '../img/scenery/arrow7.png';
// import ZoneProxemicOff from '../img/scenery/ZoneProxemicOff.png';
// import RosLibOff from '../img/scenery/ROSLibJsOFF.png';
// import SateliteOFF from '../img/scenery/sateliteOFF.png';
// import PowerOFF from '../img/scenery/powerOFF.png';
// import MatlabOFF from '../img/scenery/MatlabOFF.png';
// import GeolocationOFF from '../img/scenery/geolocationOFF.png';
// import ROSOFF from '../img/scenery/ROSOFF.png';
// import Robo from '../img/scenery/robo.png';
// import Shoe from '../img/scenery/shoe.svg';
// import Pessoa from '../img/scenery/pessoa.png';

// export default function Arquiteture() {
//   return ( 
//     <>
//       <div className="cenario">
//         <div className="row">
//           <div className="col-sm-2"> 
//           </div>
//           <div className="col-sm-1">                           
//           </div>
//           <div className="col-sm-1">
//               {/* <!-- <span><b>Results:</b></span><p>Personal</p> --> */}
//           </div>
//           <div className="col-sm-1"> 
//               <img id="step4" src={ZoneProxemicOff} width="120" />
//           </div>
//           <div className="col-sm-2"> 
//               <img src={ArrowFour} width="120" />
//           </div>
//           <div className="col-sm-1"> 
//               <img id="step5" src={RosLibOff} width="120" />
//           </div>
//           <div className="col-sm-2"> 
//               {/* <!-- <span><b>Results:</b></span><p> /Proxemic</p><span> Personal</span> --> */}
//           </div>
//           <div className="col-sm-2"> 
//           </div>
//         </div>

//         <div className="row">
//             <div className="col-sm-2"> 
//             </div>
//             <div className="col-sm-1"> 
//             </div>
//             <div className="col-sm-1"> 
//                 <img src={ArrowTree} width="120" />
//             </div>
//             <div className="col-sm-1">
//             </div>
//             <div className="col-sm-2"> 
//             </div>
//             <div className="col-sm-1">
//             </div>
//             <div className="col-sm-1"> 
//                 <img src={ArrowFive} width="120" />
//             </div>
//             <div className="col-sm-1"> 
//             </div>
//             <div className="col-sm-2"> 
//             </div>
//         </div>

//         <div className="row">
//           <div className="col-sm-1"> 
//           </div>
//           <div className="col-sm-1">
//               {/* <!--  <span><b>Results:</b></span><p>Office</p>    --> */}
//           </div>
//           <div className="col-sm-1">
//               <img id="step3" src={SateliteOFF} width="100" />
//           </div>
//           <div className="col-sm-1"> 
//           </div>
//           <div className="col-sm-4">
//             <img id="step9" src={PowerOFF} width="80" style="margin-left: 80px;" /><br /> 
//             <p id="connecting" style="margin-left: 80px;">
//                 Connecting to rosbridge...
//             </p><br />
//             <h4 id="connected" style="color:#00D600; display:none; margin-left: 80px;">
//                 Connected
//             </h4><br />
//             <p id="error" style="color:#FF0000; display:none; margin-left: 80px;">
//                 Connection did not start or failed
//             </p><br />
//             <p id="closed" style="display:none; margin-left: 80px;">
//                 Connection closed.
//             </p>  
//           </div>
//           <div className="col-sm-1"> 
//           </div>
//           <div className="col-sm-1"> 
//               <img id="step6" src={MatlabOFF} width="120" />
//           </div>
//           <div className="col-sm-1">
//               {/* <!--  <span style="margin-top:30px;"><b>Results:</b></span><p>Algorithm: Social Navigation</p> --> */}
//           </div>
//           <div className="col-sm-1">
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-sm-2"> 
//           </div>
//           <div className="col-sm-1">   
//           </div>
//           <div className="col-sm-1">
//               <img src={ArrowTwo} width="120" /> 
//           </div>
//           <div className="col-sm-1">
//           </div>
//           <div className="col-sm-2"> 
//           </div>
//           <div className="col-sm-1">
//           </div>
//           <div className="col-sm-1"> 
//               <img src={ArrowSix} width="120" />
//           </div>
//           <div className="col-sm-1"> 
//           </div>
//           <div className="col-sm-2"> 
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-sm-2"> 
//           </div>
//           <div className="col-sm-1"> 
//           </div>
//           <div className="col-sm-1">
//               {/* <!--  <span style="margin-top:30px;"><b>Results:</b></span><p> -73.989</p><p>40.733</p>  -->                             */}
//           </div>
//           <div className="col-sm-1"> 
//               <img id="step2" src={GeolocationOFF} width="100" />
//           </div>
//           <div className="col-sm-2">
//           </div>
//           <div className="col-sm-2"> 
//               <img id="step7" src={ROSOFF} width="120" />
//           </div>

//           <div className="col-sm-1"> 
//               {/* <!--  <span style="margin-top:30px;"><b>Results:</b></span><p>Manipulates sensors and actuators to move the robot</p>  --> */}
//           </div>
//           <div className="col-sm-2"> 
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-sm-2"> 
//           </div>
//           <div className="col-sm-1">                                       
//           </div>
//           <div className="col-sm-1"> 
//           </div>
//           <div className="col-sm-1">

//           </div>
//           <div className="col-sm-2"> 
//               <img src={ArrowOne} width="120"/>
//           </div>
//           <div className="col-sm-1">
//               <img src={ArrowSeven} width="120"/>
//           </div>
//           <div className="col-sm-1"> 
//           </div>
//           <div className="col-sm-1"> 
//           </div>
//           <div className="col-sm-2"> 
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-sm-5">   
//           </div>                  
//           <div className="col-sm-2">
//               <img id="step1" src={Robo} width="120"/>
//           </div>
//           <div className="col-sm-1">
//               <img src={Shoe} width="30" style="margin-top: 100px;"/>
//           </div>
//           <div className="col-sm-1">
//               <img src={Shoe} width="30" style="margin-top: 100px;"/> 
//           </div>
//           <div className="col-sm-1">
//               <img id="step8" src={Pessoa} width="200px;" /> 
//           </div>
//           <div className="col-sm-2"> 
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }