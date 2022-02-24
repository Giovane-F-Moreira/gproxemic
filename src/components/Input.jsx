import React from 'react';
import { useState } from 'react';

export default function Input(props) {

  const [valor, setValor] = useState('');
  const handlerInput = ({target}) => {
    setValor(target.value);
  }

  return (

    <input 
      type="text" 
      className='form-control' 
      placeholder={props.placeholder} 
      value={valor} 
      onChange={handlerInput}
      required
    />

  );
}