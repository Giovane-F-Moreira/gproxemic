import React from 'react';

export default function Input(props) {
  return (
    <input type="text" className='form-control' id="" placeholder={props.placeholder} required />
  );
}