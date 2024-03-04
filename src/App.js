import React,  {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About';
import TextUtils from './Components/TextUtils';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

 const [mode, setMode] = useState("light");

  
let toggleMode =() =>{
  if(mode === "light"){
    setMode( "dark");
    document.body.style.backgroundColor = "#144172";
  }else{
    setMode ( "light")
    document.body.style.backgroundColor = "white";


  }

}
  
    // Declare a new state variable, which we'll call "count"
    
    return (
      <>
      <BrowserRouter>
      
      <Navbar mode={mode} toggleMode= {toggleMode}/>
      
      <div className="container">
      <Routes>
          {/* <Route path="/" element = {<About/>}>
          <About mode={mode}/>
          </Route> */}
          
          <Route path="/"
           element = { <TextUtils mode={mode}  />}>
          </Route>
          <Route path="/about" element ={<About mode={mode}/>}>
          
          </Route>
          </Routes>
      </div>
      </BrowserRouter>
      </>
    );
  }

export default App;
