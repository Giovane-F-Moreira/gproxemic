import React from 'react';
import { useState } from 'react';

export default function Automatic() {

  const [automatic, setAutomatic] = useState(true);

  function activate(){
    if(automatic === true){
      setAutomatic(false);
      console.log(automatic);
    }else{
      setAutomatic(true);
      console.log(automatic);
    }
  }

  return (
    <div>                
      <div className="form-check form-switch">
        <input 
          className="form-check-input" 
          type="checkbox" 
          id="flexSwitchCheckDefault"
          onClick={activate} 
        />
        <label 
          className="form-check-label" 
          for="flexSwitchCheckDefault"
        >
          Automatic
        </label>
      </div>

    </div>    
  );
}