import React from 'react';
import './Mplogout.scss';
import Coverpic from '../../coverpic.svg';
import ApiCard from '../../components/apiCard/apiCard';
import Header from '../../components/header/Header';
import { Link } from "react-router-dom";

function Mplogout() {

  let arr = [
    {src:Coverpic, name:"Backgound Remove", desc:"The description of the API in quick brief and we will truncate it here...."},
    {src:Coverpic, name:"Backgound Remove", desc:"The description of the API in quick brief and we will truncate it here...."},
    {src:Coverpic, name:"Backgound Remove", desc:"The description of the API in quick brief and we will truncate it here...."},
    {src:Coverpic, name:"Backgound Remove", desc:"The description of the API in quick brief and we will truncate it here...."},
    {src:Coverpic, name:"Backgound Remove", desc:"The description of the API in quick brief and we will truncate it here...."}
  ]


  return (
    <>
     <div className="Header">
        <Header />
        <Link to="login">
          <button className="button">Login/Signup</button>
        </Link>
      </div>


    <div className='mainPage'>
      <div className='banner'>
        <img src={Coverpic} alt='coverpic' />
        <div className='right'>
          <div className='r1'>
            <div className='heading1'>Backgroung IMAGE Remover</div>
            <div className='heading2'>100% automatic and free</div>
          </div>
          <Link to="Bgremove">
          <div className='viewButton'>View App</div>
          </Link>
        </div>
      </div>
      <div className='subHead'>All APIs</div>
      <div className='cardContainer'>
       {arr.map((data,idx)=><ApiCard key={idx} src={data.src} name={data.name} desc={data.desc}></ApiCard>)}
      </div>
    </div>
    </>
  )
}

export default Mplogout;

