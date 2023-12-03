import { useState } from 'react';
import './App.css';
import './components/style.css'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About'
import{
  BrowserRouter as Router,
}from "react-router-dom"
import { Routes ,Route } from 'react-router-dom';

function App() {
  const [mode,setMode] = useState('light')

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0d0d0ddb'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
   <>
  <Router>
  <Navbar title= 'TextUtils' darkmode ={mode} toggleMode = {toggleMode}/>
  <div className="container">
    <Routes>
      <Route exact path='/about' element={<About darkmode = {mode}/>}>
        
      </Route>
      <Route exact path='/' element={ <Textform heading='Enter the text to Analyze' darkmode ={mode}/> }>
      </Route>
    </Routes>
  </div>
  </Router>
   </>
  );
}

export default App;
