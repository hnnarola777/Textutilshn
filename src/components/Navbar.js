import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom'
export default function Navbar(props) 
{
const colorpink =() => 
{
  if(props.mode === 'light')
  {
    document.body.style.backgroundColor = 'pink'
  }
  else{
    document.body.style.backgroundColor = 'pink'
  }
}
const colorgrey =() => 
{
  if(props.mode === 'light')
  {
    document.body.style.backgroundColor = 'Grey';
  }
  else{
    document.body.style.backgroundColor = 'Grey'
  }
}
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-a active" aria-current="page" href="/">Home</a>
          </li>
          {/* <li className="nav-item"> 
            <a className="nav-a" href="/about">{props.aboutText}</a>
          </li>  */}
            <a className="nav-a active" aria-current="page" href="#">Home</a>
        </ul>
        <button className="btn btn-primary mx-1" onClick={props.colors}> Blue </button>
            <button className="btn btn-primary mx-1"  onClick={colorpink}> Pink </button>
            <button className="btn btn-primary mx-1"  onClick={colorgrey} > Grey</button>
        <div className={`form-check form-switch mx-3 text-${props.mode === 'light'? 'dark' : 'light'} me-3`}>
          <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}</label>
        </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = { title : PropTypes.string ,
                     aboutText : PropTypes.string }         
Navbar.defaultProps = { title : 'set title here  ' ,
                    aboutText : 'Set abour text here' }


                    