import React from 'react'
import logo from './../assets/logo.png'
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const onClickImg = (e) =>{
        navigate("/")
    }
    
    const onClickLogin = (e) =>{
        navigate("/login")
    }

    const onClickAbout = (e) =>{
        navigate("/about")
    }

    const onClickFeatures = (e) =>{
        navigate("/");
        document.getElementById('feature').scrollIntoView();
    }

    return (
        <div className='flex page'>
            <div className = "nav left">
                <img className = "tenpercent" src={logo} alt="HeartBeatz Logo" onClick={onClickImg}></img>
                <div className = "link" href="#feature"  onClick={onClickFeatures} role="button">Features</div>
                <div className="link" onClick={onClickAbout} role="button">About the Team</div>
            </div>
            <div className = "nav">
                <div className = "login button" onClick={onClickLogin}>Log in</div>
                <div className = "login button inverted" onClick={onClickLogin}>Register</div>
            </div>
        </div>
    )
}