import React from 'react';
import { useState } from 'react';

export default function Token() {

  const [token, setToken] = useState('');
  const handlerInputToken = ({target}) => {
    setToken(target.value);
  }

  return ( 
    <>
      <input 
        type="password" 
        className='form-control' 
        id='' 
        placeholder={'Enter your Mapbox Token'} 
        value={token}
        onChange={handlerInputToken}
        required 
      />
    </>
  );
}