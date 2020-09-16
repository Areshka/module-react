import React from 'react';
import './style.scss';

const Wrapper = ({ children }) => {
  return (
    <div className='container'>
      {children}
    </div>
  );
}

export default Wrapper