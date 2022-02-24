import React from 'react';
import '../App.css';

export default function Footer() {

  return ( 
    <>
        <footer id="footer" className="footer-1">
            <div className="main-footer widgets-dark typo-light">
                <div className="container">
                    <div className="row">           
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget subscribe no-box">
                                <h5 className="widget-title">Copyright<span></span></h5>
                                    <p>Icons made by Freepik from www.flaticon.com</p>
                                    <p>Leaflet | Map data © OpenStreetMap contributors, Imagery © Mapbox</p>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Links<span></span></h5>
                                <p><a href="https://www.flaticon.com" cllink="black">www.flaticon.com</a></p>
                                
                                <p><a href="https://www.openstreetmap.org/" cllink="black">www.openstreetmap.org</a></p>

                                <p><a href="https://leafletjs.com/" cllink="black">www.leafletjs.com</a></p>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                        
                        </div> 
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>Copyright GIPAR © 2021. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      
    </>
  );
}