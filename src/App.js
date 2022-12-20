
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

function App() {

  setInterval(() => {
    document.title = 'TextUtils'
  }, 1500);
  setInterval(() => {
    document.title = 'TextUtils App'
  }, 3000);

  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  
  // const color = (colorblue,colorpink,colorgreen)=>
  // {
  //  setColor( {
  //     colorblue : 'blue',
  //     colorpink : 'pink',
  //     colorgreen : 'green'
  //   } )
  // }
  const colors =() => 
  {
    if(mode === 'light')
    {
      document.body.style.backgroundColor = '#4fdfdf'
    }
    else{
      document.body.style.backgroundColor = '#4fdfdf'
    }

}
  const showalert = (message,type) =>
  {
      setalert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
  } 
  const togglemode = () => 
  {
    if(mode === 'light')
    {
    setmode('dark')
    document.body.style.backgroundColor = '#3e3e3e'; 
    showalert("success","Your Dark mode is Enable")
    }
    else
    {
      setmode('light')
      document.body.style.backgroundColor = 'white'; 
      showalert("success","Your Light mode is Enable")
    }
  }
  return (
    <>
      <Navbar title = " Textutils"  aboutText="About us" mode={mode} togglemode={togglemode} colors={colors}/> 
      <Alert alert={alert} />

    {/* <Router>
    
   
      <div className="container my-3" >
      <Routes>
          <Route path="/about" element={<About />}>        
          </Route>
          <Route path="/" element={<TextForm showalert={showalert} heading="Enter Text To Analysis" mode={mode}  /> }>
  
          </Route>
        </Routes>
      <About /> */}
        <TextForm showalert={showalert} heading="Enter Text To Analysis" mode={mode}  />  
      {/* </div>
      </Router> */}
    </>
  );
}
export default App;
