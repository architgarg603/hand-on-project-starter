import React from 'react';
import './apiCard.css';
import MainPic from '../../coverpic.svg'

function apiCard() {
  return (
  <div className='apicard'>
      <div className='Mainpic'>
          <img src={MainPic} alt='MainPic' ></img>
      </div>
       <div className='MainHeading'>
           API Name
       </div>
       <div className='Description'>
           The description of the API in quick brief and we will truncate it here....
       </div>
  </div>
    )
  }

export default apiCard;

