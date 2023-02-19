import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'
import About from './pages/about/About'
import "./App.css";


class AppRouter extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Routes>
            <Route path = "/" element = {<HomePage />} exact = {true} />
            <Route path = "/homepage" element = {<HomePage />} exact = {true} />
            <Route path = "/dashboard" element = {<Dashboard />} exact = {true} />
            <Route path = "/login" element = {<LoginPage />} exact = {true} />
            <Route path = "/about" element = {<About />} exact = {true} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter