import React from 'react'
import './style.css'


export default function About(props) {
  return (
     <div>
        <h1 className='about' style ={{color: props.darkmode === 'dark'?'white':'black'}}>About</h1>
        <p className='paragraph' style ={{color: props.darkmode === 'dark'?'white':'black'}}>TextUtils is a website that helps to manipulate text</p>
     </div>
  
  )
}
