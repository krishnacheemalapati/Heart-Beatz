import React, {useState} from "react";
import './LoginPage.css';
//import logo from
//todo:check username&password

export const Register = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(username, password);
    }

    return(
        <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label form="username">username</label>
            <input value = {username} onChange = {(e) => setUsername(e.target.value)} type = "username" placeholder="username"/>
            <label form="password">password</label>
            <input onChange = {(e) => setPassword(e.target.value)}type = "password" placeholder="password"/>
            <label form="email">Email</label>
            <input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder="youremail@something.com"/>
            <button type="submit">Register</button>
        </form>
        </div>
    )
}