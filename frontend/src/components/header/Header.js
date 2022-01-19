import React from 'react';
import './Header.scss';
import Cuvette from '../../Cuvette.svg';
import { useLocation } from 'react-router-dom';

function header() {
    let path = useLocation();
    let email = localStorage.getItem("email");
    console.log(path.pathname, email);



    return (
        <div className='header'>
            <img src={Cuvette} alt='logo'></img>
            {path.pathname != '/dashboard' ?
                email ? <>
                    <div className='button'>My APIs</div>
                    <div className='button'>My Account</div>
                </> :
                    <div className='button'>Login/Signup</div>
                : null
            }
        </div>
    )


}

export default header;
