// import React from 'react'
import React, { useState} from 'react'



const TextUtils = (props) => {
      const haddleUpClick = () =>{
            let newText = text.toUpperCase();
            // text.toUpperCase();
            setText(newText)
          }
          const haddlechange = (event) =>{
            
            setText(event.target.value);
          }
          const haddlelowerClick = ()=>{
            let lowerText = text.toLowerCase();
            setText(lowerText)
          }
          const clear = () =>{
              setText("");
        
          }
          const copyText = () =>{
            navigator.clipboard.writeText(text);
            alert("Copied the text: " + text);
          }
          
          const [text, setText] = useState("");     
  return (
    <div className="container" style={{color: props.mode=== 'dark'? 'white': 'black'}}> 
        <h2>Type Text Here....</h2>
        
        <div className="my-3">
        <textarea  id="mybox" cols="30" rows="10" value={text} onChange={haddlechange} style={{backgroundColor: props.mode === 'dark'? '#144172': 'white',color: props.mode=== 'dark'? 'white': 'black'}}> </textarea>
        </div>

        <button className=' mx-3 my-3' onClick={haddleUpClick}>Convert To UpperCase</button>
        <button className=' mx-3 my-3' onClick={haddlelowerClick}>Convert to LowerCase</button>
        <button className='mx-3 my-3' onClick={clear}>Clear</button>
        <button className='mx-3 my-3' onClick={copyText}>Copy Text</button>
        <p>Word count {text.split(" ").filter((element) =>{ return element.length !== 0}).length} -  {text.length} Character</p>
        <p>{0.008 * text.split(" ").filter((element) =>{return element.length !==  0}).length} Minutes Read</p>
      </div>
  )
}

export default TextUtils