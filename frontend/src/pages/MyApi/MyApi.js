import React from 'react'
import Coverpic from '../../coverpic.svg';
import ApiCard from '../../components/apiCard/apiCard';
import Headerlogin from '../../components/headerlogin/headerlogin';


function MyApi() {

    let arr = [
        {src:Coverpic, name:"Backgound Remove", desc:"The description of the API in quick brief and we will truncate it here...."},
        {src:Coverpic, name:"Backgound Remove", desc:"The description of the API in quick brief and we will truncate it here...."},
        {src:Coverpic, name:"Backgound Remove", desc:"The description of the API in quick brief and we will truncate it here...."},
        {src:Coverpic, name:"Backgound Remove", desc:"The description of the API in quick brief and we will truncate it here...."},
        {src:Coverpic, name:"Backgound Remove", desc:"The description of the API in quick brief and we will truncate it here...."}
      ]
  return (
    <div> 
         <div className="Head">
        <Headerlogin />
      
      </div>
    <div className='cardContainer'>
    {arr.map((data,idx)=><ApiCard key={idx} src={data.src} name={data.name} desc={data.desc}></ApiCard>)}
   </div>
   </div>
  )
}

export default MyApi