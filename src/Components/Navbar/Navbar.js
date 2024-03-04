import React from 'react'
import {Link} from "react-router-dom";

const Navbar = (props) => {
  
  
  
// const [text, setText] = useState ("Enable To Light Mode");
// let textChange = () =>{
//   if(text === "Enable to Dark Mode"){
//     // setText("Enable to Light Mode")
//   }else{
//     setText("Enable To Dark Mode")
//   }
// }


  return (
    <>
    <div >
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` } >
        <div className="container-fluid " >
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"  >
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              

            </ul>

            
    {/* <h4>Hello, {props.name} {props.age}</h4>
    <h5>Rimjhim {props.age}</h5> */}
          </div>
          <div className={`form-check form-switch text-${props.mode=== 'light'? "dark": "light"} `} >
              <input className="form-check-input" onClick={props.toggleMode}    type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  >Mode</label>
            </div>
        </div>
      </nav>
      </div>
    </>
  )
}

export default Navbar