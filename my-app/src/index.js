import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import AppRouter from './AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppRouter />
);
//login and register stuff
// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

// const app = express();

// app.use(express.json());
// app.use(cors())
// const db = mysql.createConnection({
//     user:"root",
//     host:"localhost",
//     password:"password",
//     database:"LoginSys"
// })

// app.listen(3000,()=>{
//   console.log("running server");
// })

// app.post('/login',(req, res)=>{
//   const username = req.body.username;
//   const password = req.body.password;

//   db.query(
//     "SELECT *FROM users WHERE username =? AND password = ?"
//     [username,password],
//     (err, result)=>{
//       if(err){res.send({err:err})}
//       else{
//         if(result){res.send(result)}
//         else{
//           res.send({message: "Invalid credentials"});
//         }
//       }
//     }
//   );
// })