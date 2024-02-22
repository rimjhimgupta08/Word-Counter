import React,  {useState} from 'react';
import './App.css';

function App() {
  const haddleUpClick = () =>{
    let newText = text.toUpperCase();
    // text.toUpperCase();
    setText(newText)
  }
  const haddlechange = (event) =>{
    
    setText(event.target.value)
  }
  const haddlelowerClick = ()=>{
    let lowerText = text.toLowerCase();
    setText(lowerText)
  }
  
    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState("");
    return (
      <>
      
      <div className='container'>
        <h2>Type Text Here....</h2>
        
        <div className="my-3">
        <textarea  id="mybox" cols="50" rows="10" value={text} onChange={haddlechange}> </textarea>
        </div>

        <button className=' mx-3' onClick={haddleUpClick}>Convert To UpperCase</button>
        <button className=' mx-3'onClick={haddlelowerClick} >Convert to LowerCase</button>
        <p>Word count {text.split(" ").length-1} -  {text.length} Character</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
      </div>
      </>
    );
  }

export default App;
