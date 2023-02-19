import {useState} from "react";
import './LoginPage.css';
//import axios from 'axios';
//import { response } from "express";
import { useNavigate } from "react-router-dom";

//import logo from
//todo:check username&password

export default function Login (){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () =>{
        if(username.length===0 || password.length===0){
            alert("Invalid credentials");
        }
        else{
            navigate("/dashboard");
            // const url="http://localhost/insert_users.php";
            // let fData = new FormData();
            // fData.append('username', username);
            // fData.append('password', password);

            // axios.post(url, fData)
            // .then(response=>alert(response.data))
            // .catch(error=>alert(error));
        }
        //e.preventDefault();
        // console.log(username, password);
    };
/*
    const Login = ()=>{
        Axios.post("http://localhost3000", {
            username:username,
            password:password,
        }).then ((response)=>{
            console.log(response);
        });
    };
*/
    return(
        <div className="container">
        <h1>Welcome to Heart-Beatz!</h1>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" value={username} onChange= {(e)=>setUsername(e.target.value)}/>
            <label form="password">password</label>
            <input type="text" name="password" id="password" value={password} onChange= {(e)=>setPassword(e.target.value)}/>
            <div className="registration">
                <input type="button" name="Login" id="Login" value={"LOGIN"} onClick={handleSubmit}/>
                <input type="button" name="Login" id="Register" value={"REGISTER"} onClick={handleSubmit}/>
            </div>
        </div>
    )
}