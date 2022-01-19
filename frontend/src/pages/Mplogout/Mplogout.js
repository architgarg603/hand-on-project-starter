import React from 'react';
import './Mplogout.css';
import Header from '../../components/header/Header';
import Coverpic from '../../coverpic.svg';
import ApiCard from '../../components/apiCard/apiCard';

function Mplogout() {
  return(
<div>
      
    <div className='mainPage'>

    <div className='Header'>
    <Header/>
    </div>

      <div className='banner'>
          <div className='heading1'>Backgroung IMAGE Remover</div>
          <div className='heading2'>100% automatic and free</div>
          <div className='viewButton'>View Button</div>
      </div>
      
      <div className='coverPic'>
              <img src={Coverpic} alt='coverpic'></img>
          </div>

        <div className='Card'>
            <ApiCard />
        </div>
    </div> 
  
    
  
</div>
  )
}

export default Mplogout;

