import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import userPic from "../../images/user_img.svg";
import "./dashboard.scss";

function Dashboard() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const changeHandler = (e,type)=>{
        if(type == "email"){
            setEmail(e.target.value)
        }else{
            setPassword(e.target.value)
        }
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(email,password);
        localStorage.setItem("email", email);
        navigate("/")

    }


    return (
        <>
            <div className="dashboard">
                <div className="left">
                    <div className="leftContainer">
                        <div className="imgContainer">
                            {/* <img src={userPic} alt="user_img" className="userImg" /> */}
                        </div>
                        <h1 className="title">Welcome to your Dashboard</h1>
                        <p className="description">
                            Your uploaded APIs will be displayed here once you login to your
                            account
                        </p>
                    </div>
                </div>
                <div className="right">
                    <div className="rightContainer">
                        <h1>Login to your account</h1>
                        <form className="loginForm">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email address"
                                onChange={(e)=>{changeHandler(e,"email")}}
                            />
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={(e)=>{changeHandler(e,"password")}}
                            />
                            <input type="submit" value="Login/Signup" id="submit" onClick={onSubmitHandler} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;