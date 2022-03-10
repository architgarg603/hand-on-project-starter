import React,{useState} from 'react';
import './headerlogin.scss';
import Cuvette from '../../Cuvette.svg';
import { Link } from "react-router-dom";
import Modal from "../modal/modal";


function headerlogin() {
const [openModal, setOpenModal] = useState(false);
    return (
        <div className='headerlogin'>
           <Link to="/">
           <img className='Cuvette' src={Cuvette} alt='logo'></img>
               </Link> 
               <Link to="MyAPI">
          <button className="button1">My APIs</button>
        </Link>
        <Link to="NewApi">
          <button     
          className="modal"
          onClick={() => {
          setOpenModal(true);
          }}> 
          +New API
          </button>
          {openModal && <Modal closeModal={setOpenModal} />}
        </Link>
        </div>
    );
}
export default headerlogin;
