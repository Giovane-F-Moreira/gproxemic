import React from 'react';
import { useState } from 'react';

export default function ButtonSearch() {

  const [valor, setValor] = useState('');

  function search(){
    setValor(valor + 1);
  }

  return ( 
    <>
      <button 
        type="submit" 
        onClick={search}
        className='btn btn-outline-dark'
      >
        Search
      </button>
      <label>Teste: <span>{valor}</span></label>
    </>
  );
}