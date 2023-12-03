import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  const [buttonText,setButtonText] = useState('Enable Dark Mode')
  
  const changeButtonText = () =>{
    if(props.darkmode === 'light'){
      setButtonText('Enable Light Mode')
    }
    else if(props.darkmode === 'dark'){
      setButtonText('Enable Dark Mode')
    }
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-black">

     <div className={`container-fluid bg-${props.darkmode === 'light'? 'white' : 'dark'}`}>

      <Link className={`navbar-brand text-${props.darkmode === 'light'? 'dark':'light'}`} to="/">{props.title}</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse bg-${props.darkmode === 'light'? 'white' : 'dark'}`} id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link text-${props.darkmode === 'light'? 'dark':'light'}`} aria-current="page" to="/" onClick={()=>document.title = 'TextUtils - Home'}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link text-${props.darkmode === 'light'? 'dark':'light'}`} to="/about" onClick={()=>document.title = 'TextUtils - About'}>About</Link>
          </li>
         </ul> 
         <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={function(event){  changeButtonText(); props.toggleMode();}}/>
            <label className={`form-check-label text-${props.darkmode === 'light'? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{buttonText}</label>
        </div>
      </div>
    </div>
   </nav>
   </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}