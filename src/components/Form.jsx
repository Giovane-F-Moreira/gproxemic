import React from 'react';
import { useState } from 'react';
import '../App.css';

export default function Form() {

  const [valueLatitude, setValueLatitude] = useState('');
  const [valueLongitude, setValueLongitude] = useState('');
  
  const handlerInputLatitude = ({target}) => {
    setValueLatitude(target.value);
  }
  
  const handlerInputLongitude = ({target}) => {
    setValueLongitude(target.value);
  }
  
  const search = () => {
    alert(valueLatitude);
    alert(valueLongitude);
  }

  return (

    <>
      <input 
        type="text" 
        className='form-control' 
        placeholder='Latitude'
        value={valueLatitude} 
        onChange={handlerInputLatitude}
        required
      />

      <input 
        type="text" 
        className='form-control' 
        placeholder='Longitude'
        value={valueLongitude} 
        onChange={handlerInputLongitude}
        required
      />

      <button 
        type="submit" 
        onClick={search}
        className='btn btn-outline-dark'
      >
        Search
      </button><br />
    </>

  );
}