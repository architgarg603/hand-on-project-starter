import React from 'react';
import './Header.css';
import Cuvette from '../../Cuvette.svg';

function header() {
 return (
     <div className='header'>
 <div className='logo'>
    <img src={Cuvette} alt='logo'></img>
  </div>
  <div className='button'>Login/Signup</div>  
     </div>
 )
 

}

export default header;
