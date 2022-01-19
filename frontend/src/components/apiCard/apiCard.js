import React from 'react';
import './apiCard.scss';

function apiCard({src,name,desc}) {
  return (
  <div className='apicard'>
          <img src={src} alt='MainPic' ></img>
       <div className='MainHeading'>
           {name}
       </div>
       <div className='Description'>
           {desc}
       </div>
  </div>
    )
  }

export default apiCard;

