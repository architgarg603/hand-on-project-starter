import React from "react";
import './BgRemover.scss';
import Header from '../../components/header/Header';
import CoverPic from '../../coverpic.svg';
import picIcon from '../../uploadimage.svg';
import axios from "axios";

function BgRemover() {
   
  
  const onSubmitHandler = async (files) => {
    let formdata = new FormData();
    formdata.append('file',files) 
    console.log(formdata,files);
    let data = await axios.post("http://localhost:3000/bgremove",formdata);
    console.log(data);
  }
   

  return( 
  <>
  <Header />
  <div className="landingPage">
        <div className="about">
          <div className="leftContainer">
            <h1 className="title">Remove image background</h1>
            <p className="description">100% automatic and free</p>
            <div className="imgContainer">
              <img src={CoverPic} alt="user_img" className="userImg" />
            </div>
          </div>
        </div>
        <div className="upload_pic">
          <div className="rightContainer">
            <div className="pictureContainer">
              <img src={picIcon} alt="" className="gallery" />
            </div>
            <p className="instructions">File should be png, jpg and less than 5mb</p>
            <label className="choose_img"> Upload Image
             
              <input type="file" style={{display:"none"}} onChange={(e)=>{
               console.log(e.target.files[0]);
               onSubmitHandler(e.target.files[0])}}>
              </input>
            </label>
        
        
            {/* <button className="choose_img">Upload Image
            
            </button> */}
            <p className="instructions">Or drop a file</p>
          </div>
        </div>
      </div>
  </>
  )}

export default BgRemover;

