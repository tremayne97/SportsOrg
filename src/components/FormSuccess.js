import React from 'react';
import '../styles/Form.css';
import image from "../assets/Logo.png";

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Sign up complete.</h1>
      <h1 className='form-success'>Welcome to SportsOrg</h1>
      <h1 className='form-success'>Click <a href='/about'>here</a> to get started.</h1>
      <img className='form-img-2' src={image} />
    </div>
  );
};

export default FormSuccess;
