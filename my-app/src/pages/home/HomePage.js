import React from 'react'
import Navbar from './../Navbar'
import { useNavigate } from "react-router-dom";
import mainImg from "./../../assets/mainImg.gif"
import sensors from "./../../assets/sensors.png"
import dashboard from "./../../assets/dashboard.PNG"

export default function HomePage() {
  const navigate = useNavigate();

  const onClickLogin = (e) => {
    navigate("/login")
  }
  return (
    <div>
    <Navbar />
      <div className="HeroSection">
        <img className="Mainimg" src={mainImg} alt="Main Feature Gif"></img>
        <div className="join">
          <div className="main-text">
            The best way to maintain your health with <strong> music.</strong>
          </div>
          <div className="button join-button" onClick={onClickLogin}>Join Today</div>
        </div>
      </div>
      <div className="LoginPage page">
        <div className="para left">
          <img className="para-img" src={sensors} alt="Visualization"></img>
          <div className="para-with-subtext">
            <div className="subtext">
              <strong>Jam to your workouts with ease</strong>
            </div>
            <div className="para-text">
              Our tool allows you to play music synced to your heart rate during the workout, so you can 
              focus on your workout and not on the music that drives you. Select a custom track list, or use
              our pre-made playlists.
            </div>
          </div>
        </div>
        <div className="para right">
          <div className="para-with-subtext">
            <div className="subtext">
              <strong>Track your past workouts online!</strong>
            </div>
            <div className="para-text">
              Use your dashboard to track your past workouts, and see your progress over time. Reminisce on
              your past workouts, the music you listened to, the places you've gone, and see how far you've come!
            </div>
          </div>
          <img
            className="para-img"
            src={dashboard} alt="Voiceflow Integration"></img>
        </div>
        <div>
          <div className="final-join">
            <div className="final-join-text">
              Let us help you unlock you full fitness potential, and<br></br>
              enhance your workouts, one heartbeat at a time.
            </div>
            <div className="buttons">
              <div className="registerbtn">
                <div className="register-button button" role="button" onClick={onClickLogin}>Join Today</div>
              </div>
              <div className="loginbtn">
                <div className="login-button button-inverted" role="button" onClick={onClickLogin}>Login</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}