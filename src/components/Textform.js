import React, { useState } from 'react'
import './style.css'
export default function Textform(props) {
  let color = {
    backgroundColor : 'black'
  }
  const [text,setText] = useState('')
  const [tempText,setTempText] = useState('')
  let undoButton = document.getElementById('undo')

  const handleUpperClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleLowerClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }

  const handleonChange = (event) =>{
    setText(event.target.value)
  }  

  const handleClear = () =>{
    setText("")
  }  

  const handleCopyText = () =>{
    let text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
  }

  const handleExtraSpaces = () =>{
    let newtext = text.split(/[ ]+/)
    setText(newtext.join(" "))
  }

  const handleundoText = () =>{
    setTimeout(() => {
      setTempText(text)
    }, 4000);
  }

  const handleUndoText2 = () =>{
     setText(tempText)
     document.getElementById('myBox').value = text
  }

  function handleDarkMode(){
    return props.darkmode === 'dark'?'white':'black'
  }
  
  function handleButtonColor(){
    return props.darkmode === 'dark'?'black':'blue'
  }

  return (
    <>
    <div>
      <h1 style={{color: handleDarkMode()}}>{props.heading}</h1>
      <div className="mb-3 my-4">
      <textarea className={`form-control text-${handleDarkMode()}`} id="myBox" rows="8" value = {text}   onChange={ (e) => { handleonChange(e); handleundoText();} } placeholder='Enter Text Here'style={{backgroundColor: props.darkmode === 'dark'? 'rgb(45 45 45 / 86%)': 'white'}}></textarea>
      </div>
      <button className={`btn button1 mx-3 bg-${handleButtonColor()}`} onClick={handleUpperClick} >Convert to Uppercase</button>     
      <button className={`btn button2 mx-3 bg-${handleButtonColor()}`} onClick={handleLowerClick}>Convert to Lowercase</button>     
      <button className={`btn button3 mx-3 bg-${handleButtonColor()}`} onClick={handleClear}>Clear</button>
      <button className={`btn button3 mx-3 bg-${handleButtonColor()}`}  onClick={handleCopyText}>Copy Text</button>     
      <button className={`btn button3 mx-3 bg-${handleButtonColor()}`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>     
      <button className={`btn button3 mx-3 bg-${handleButtonColor()}`}  onClick={handleUndoText2} id ='undo'>Undo</button>     
    </div> 

    <div className="container my-3"  style={{color: handleDarkMode()}}>
      <h2>Your Text Summary</h2>
      <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
      <p>{0.08 * text.split(" ").length} minutes to read</p> 
      <h2>Preview</h2>
      <p>{text}</p>
    </div> 
    </>
  )
} 